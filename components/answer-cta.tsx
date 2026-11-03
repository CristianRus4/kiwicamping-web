import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaLocale } from "@/lib/app-store";

/**
 * The download step right after a page's opening answer: one line naming the feature that solves the
 * reader's problem, and the store button with the `ans` campaign token (`w_ans_<locale>`).
 */
export function AnswerCta({ text, locale, label }: { text: string; locale: CtaLocale; label: string }) {
  return <div className="answer-cta">
    <p>{text}</p>
    <a className="store-button" href={appStoreUrl({ placement: "ans", locale })} data-cta="ans"><FaApple aria-hidden="true" /><span>{label}</span></a>
  </div>;
}
