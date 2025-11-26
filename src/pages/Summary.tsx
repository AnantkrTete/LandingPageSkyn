import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("quiz_user_id");

    if (!userId) return;

    const fetchAnswers = async () => {
      const ref = doc(db, "quizResponses", userId);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setAnswers(snap.data());
      }

      setLoading(false);
    };

    fetchAnswers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Loading your answers...
      </div>
    );
  }

  return (



    
    <div className="min-h-screen text-white bg-gradient-to-r from-[#0A0433] via-[#47126B] to-[#FE639C] p-10">

      <h1 className="text-4xl text-center font-bold mb-10">Review Your Answers</h1>

      <div className="max-w-2xl mx-auto space-y-6 bg-white/10 p-8 rounded-xl border border-white/20">

        <p className="text-xl text-white">
          <strong>Skin Type:</strong> {answers?.q1_skinType || "Not selected"}
        </p>

        <p className="text-xl text-white">
          <strong>Commitment Level:</strong> {answers?.q2_commitment || "Not selected"}
        </p>

        <p className="text-xl text-white">
          <strong>Product Preference:</strong> {answers?.q3_preference || "Not selected"}
        </p>

        <p className="text-xl text-white">
          <strong>Main Concern:</strong> {answers?.q4_concern || "Not selected"}
        </p>

      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/outcome")}
          className="px-10 py-4 bg-white text-black text-xl rounded-xl border border-black/40"
        >
          Continue to Your Skincare Plan →
        </button>
      </div>

    </div>
  );
};

export default Summary;
