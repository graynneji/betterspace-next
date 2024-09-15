"use client";
import Button from "./Button";
import styles from "./Questionaire.module.css";
import { createPatients } from "../_lib/actions";
import { GrCircleInformation } from "react-icons/gr";
import { useState } from "react";
import Input from "./Input";
import FeaturedIcon from "@/public/Featuredicon.svg";
import Image from "next/image";
import Link from "next/link";
// import { useFormState } from "react-hook-form";
import { signup } from "../_lib/actions";
const questions = [
  {
    question_text: "What is your gender identity?",
    info_text:
      "Sharing this information helps your therapist tailor a more customized and supportive approach to your needs.",
    options: ["Man", "Woman"],
    section: 0,
  },
  {
    question_text: "What is your relationship status?",
    info_text:
      "Relationship status can affect your well-being. Sharing it helps your therapist provide a more personalized approach.",
    options: [
      "Single",
      "Married",
      "Divorced",
      "Widowed",
      "Other",
      "Prefer not to say",
    ],
    section: 0.5,
  },
  {
    question_text: "How would you rate your current physical health?",
    info_text:
      "This will help your therapist understand your needs better and create a more effective plan.",
    options: ["Good", "Fair", "Poor"],
    section: 1,
  },
  {
    question_text: "Are you on any medication?",
    info_text:
      "Medication can play a significant role in mental health treatment.",
    options: ["No", "Yes"],
    section: 1.5,
  },
  {
    question_text: "Have you been in therapy before?",
    info_text:
      "Sharing your therapeutic history helps your therapist create a personalized plan. New to therapy? We'll guide you through what to expect after signing up.",
    options: ["No", "Yes"],
    section: 2,
  },
  {
    question_text: "Why do you want to work on your mental health?",
    info_text:
      "Understanding your motivations helps us match you with a therapist who aligns with your goals and empowers you to achieve lasting progress.",
    options: [
      "I feel depressed",
      "I have anxious thoughts",
      "I am grieving",
      "I lost the purpose of life",
      "I struggle to have healthy relationships",
      "I am having a tough time",
      "I have low self esteem",
      "I have experienced trauma",
      "I want to improve all areas of my life",
      "Just exploring",
      "Other",
    ],
    section: 2.5,
  },
  {
    question_text: "What kind of resources are you interested in exploring?",
    info_text: "Helps us recommend relevant tools and support.",
    options: [
      "Articles",
      "Journals",
      "Support group",
      "Educational videos/courses",
      "Goals & Habit tracking",
      "Mindfulness excercise",
    ],
    section: 3,
  },
  {
    question_text: "Are there any specific therapist qualities you prefer?",
    info_text:
      "We want to ensure you have a compatible and effective therapeutic relationship.",
    options: [
      "Male therapist",
      "Female therapist",
      "Christain therapist",
      "Muslim therapist",
      "Non-religious therapist",
    ],
    section: 3.5,
  },
  {
    question_text: "What kind of communication style resonates with you?",
    info_text: "The therapist who communicates in a way that suits you.",
    options: [
      "Direct and straightforward",
      "Warm and empathetic",
      "Humorous and ligthearted",
      "Gentle and patient",
    ],
    section: 4,
  },
  {
    question_text: "What is your preferred language?",
    info_text:
      "We want to ensure there is a clear communication and understanding.",
    options: [
      "English",
      "Vanacular",
      "Igbo",
      "Yoruba",
      "Hausa",
      "Efik",
      "Birom",
      "Calaba",
    ],
    section: 4.5,
  },
  {
    question_text: "What best describes your current work situation?",
    info_text:
      "This information helps your therapist understand your daily life and provide more tailored support.",
    options: [
      "Employed full-time",
      "Employed part-time",
      "Self-employed",
      "Unemployed",
      "Student",
      "Retired",
      "Other",
    ],
    section: 5,
  },
  {
    question_text: "How did you get to know about betterspace?",
    info_text: "Helps us improve outreach and support.",
    options: [
      "Google search",
      "Facebook",
      "Youtube",
      "X (formerly twitter)",
      "Instagram",
      "Other",
    ],
    section: 6,
  },
];

export default function QuestionCard() {
  //   const [state, action] = useFormState(signup, undefined);
  const [currentSection, setCurrentSection] = useState(0); // Track current section
  const [selectedQuesAnswers, setSelectedQuesAnswers] = useState([]);
  const totalSections = 8;
  let section = 0;

  const handleNextSection = (e, option, questionText) => {
    e.preventDefault();
    if (currentSection < totalSections - 0.5) {
      setCurrentSection(currentSection + 0.5);
    }
    if (currentSection < totalSections - 0.5 && currentSection >= 5) {
      setCurrentSection(currentSection + 1);
    }
    console.log("next", currentSection);
    // const selectedvalue = e.target.value;
    setSelectedQuesAnswers((prevAnswers) => [
      ...prevAnswers,
      //{} key and value {[questionText]: option,}
      //   [questionText]: option,
      { question: questionText, answer: option },
    ]);
    console.log(selectedQuesAnswers);
  };
  const createPatientsWithQuestionAnswer = createPatients.bind(
    null,
    selectedQuesAnswers
  );
  return (
    <>
      <div className={styles.progressBar}>
        {Array.from({ length: totalSections }, (_, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "5px",
              backgroundColor:
                currentSection >= index && currentSection < index + 1
                  ? "#022c22d7"
                  : "#ccc",
              marginRight: index < totalSections - 1 ? "5px" : "0",
            }}
            className={styles.bars}
          />
        ))}
      </div>
      <div className={styles.questionTop}>
        <h1 className={styles.questionHOne}>
          Lets match you with the Right Therapist
        </h1>

        <p className={styles.questionSpan}>
          A strong therapeutic relationship begins with the right match. Let us
          guide you to a licensed therapist who understands your needs and
          preferences through these simple questions.
        </p>
      </div>

      <div className={styles.formContainer}>
        {/* <form action={createPatients} className={styles.form}> */}
        <form
          action={signup}
          //   action={async (formData) =>
          //     await createPatientsWithQuestionAnswer(formData)
          //   }
          className={styles.form}
        >
          {questions.map((question, index) => (
            <div key={index} className={styles.questionCard}>
              {currentSection === question.section && (
                <>
                  <h3 className={styles.questionHThree}>
                    {question.question_text}
                  </h3>
                  {/* <span className={styles.questionSpan}>
                    kindly provide us with some information
                  </span> */}
                  <div className={styles.buttonCon}>
                    {question.options.map((option) => (
                      <Button
                        key={option}
                        defaultValue={option}
                        handleSection={(e) =>
                          handleNextSection(e, option, question.question_text)
                        }
                        type="TransparentButton"
                      />
                    ))}
                  </div>
                  <div className={styles.infoBar}>
                    <GrCircleInformation
                      style={{ minWidth: "24px", minHeight: "24px" }}
                    />
                    <p>{question.info_text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
          {currentSection === 7 && (
            <div className={styles.createFormSection}>
              <Image
                style={{ width: "48px", height: "48px" }}
                src={FeaturedIcon}
                alt="featured icon"
              />
              <span className={styles.questionSpan} style={{ maxWidth: "70%" }}>
                Great job, You&#39;ve successfully completed the questionnaire!{" "}
                <strong>next step is to create an account</strong>
              </span>
              <Input
                type="text"
                inputType="create"
                label="First Name"
                id="name"
                name="name"
                placeholder="First Name"
                //   disabled={isSubmitting}
                //   register={register}
                //   error={errors.name}
              />

              <Input
                type="text"
                inputType="create"
                label="Email Address"
                id="email"
                name="email"
                placeholder="Email Address"
                //   disabled={isSubmitting}
                //   register={register}
                //   error={errors.name}
              />

              <Input
                type="text"
                inputType="create"
                label="Phone Number"
                id="phone"
                name="phone"
                placeholder="Phone"
                //   disabled={isSubmitting}
                //   register={register}
                //   error={errors.name}
              />

              <Input
                type="password"
                inputType="create"
                label="Create Password"
                id="password"
                name="password"
                placeholder="Create password"
                //   disabled={isSubmitting}
                //   register={register}
                //   error={errors.name}
              />

              <Input
                type="hidden"
                inputType="create"
                // label="selected"
                id="selected"
                name="selected"
                // placeholder="First Name"
                //   disabled={isSubmitting}
                //   register={register}
                //   error={errors.name}
                selectedQuesAnswers={selectedQuesAnswers}
              />
              <div className={styles.btnCon}>
                <span className={styles.PrivacyText}>
                  By continuing you agree with betterspace{" "}
                  <Link
                    href="/privacy"
                    style={{ color: "#022c22", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </Link>
                </span>
                <Button type="submit">Create account</Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
