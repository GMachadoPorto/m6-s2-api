import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 11 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (User) => User.contacts)
  user: User;
}

export { Contact };
