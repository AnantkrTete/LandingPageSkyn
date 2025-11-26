import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export async function saveAnswer(
  userId: string,
  questionId: string,
  answer: string | string[] //
) {
  try {
    await setDoc(
      doc(db, "quizResponses", userId),
      {
        [questionId]: answer,
        updatedAt: new Date(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error saving answer:", error);
  }
}
