import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Contact } from "./contacts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 11 })
  telephone: string;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Contact, (Contact) => Contact.user)
  contacts: Contact[];
}

export { User };
