import app from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
