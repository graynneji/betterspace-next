"use client";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import Button from "./Button";
import Input from "./Input";
import styles from "./Contact.module.css";
import Image from "next/image";
import LinkedinCon from "@/public/LinkedinCon.svg";
import InstagramCon from "@/public/InstagramCon.svg";
import TwitterCon from "@/public/TwittterCon.svg";
import FacebookCon from "@/public/FacebookCon.svg";
import { submitForm } from "@/app/_lib/actions";
import ErrorMessage from "./ErrorMessage";
const initialState = {
  message: null,
};
export default function Contact() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(submitForm, initialState);
  //   const response = await fetch(`http://www.geoplugin.net/json.gp`);

  //   const location = await response.json();
  //   const handleSubmit = submitForm.bind(null, location);
  console.log(pending);
  return (
    <section className={styles.ContactContainer}>
      <div className={styles.LeftSide}>
        <div className={styles.TopText}>
          <h2 className={styles.ContactBoldText}>Contact Us</h2>
          <h5 className={styles.ContactLightText}>
            Get in touch with our team and we would get back to you as soon as
            possible.
          </h5>
        </div>
        <div className={styles.SocialContactCon}>
          <Image src={LinkedinCon} alt="Contact us through LinkedIn " />
          <Image src={InstagramCon} alt="Contact us through Instagram" />
          <Image src={TwitterCon} alt="Contact us through Twitter" />
          <Image src={FacebookCon} alt="Contact us through Facebook" />
        </div>
      </div>

      <form action={formAction}>
        {/* <form action={handleSubmit}> */}
        <div className={styles.ContactForm}>
          <div className={styles.MergeInput}>
            <Input
              type="text"
              inputType="text"
              label="Name"
              id="name"
              name="name"
              placeholder="John Doe"
              //   disabled={isSubmitting}
              //   register={register}
              //   error={errors.name}
            />

            <Input
              type="text"
              label="Company"
              inputType="text"
              id="company"
              name="company"
              placeholder="ABC Company (optional)"
              //   disabled={isSubmitting}
              //   register={register}
              //   error={errors.company}
            />
          </div>
          <div className={styles.MergeInput}>
            <Input
              type="tel"
              inputType="text"
              label="Phone Number"
              id="phone"
              name="phone"
              placeholder="(123) 456-7890"
              //   disabled={isSubmitting}
              //   register={register}
              //   error={errors.phone}
            />

            <Input
              type="email"
              inputType="text"
              label="Email Address"
              id="email"
              name="email"
              placeholder="example@example.com"
              //   disabled={isSubmitting}
              //   register={register}
              //   error={errors.email}
            />
          </div>

          <Input
            type="textarea"
            inputType="textarea"
            label="Your Enquiry"
            id="message"
            name="message"
            placeholder="Type a message..."
            // disabled={isSubmitting}
            // register={register}
            // error={errors.message}
          />

          <div className={styles.ButtonContainer}>
            <ErrorMessage>{state?.message}</ErrorMessage>
            <Button type="submit" disabled={pending}>
              Submit
              {/* {isSubmitting ? "Loading..." : "Submit"} */}
            </Button>
            <span className={styles.PrivacyText}>
              By continuing you agree with betterspace{" "}
              <Link
                href="/privacy"
                style={{ color: "#022c22", textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}