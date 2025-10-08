import { Router } from "express";
import * as BookController from "../controllers/BookController.js";

const router = Router();

router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBookId);
router.post("/books", BookController.SaveBook);
router.delete("/books/:id", BookController.DeleteBook);

export default router;
