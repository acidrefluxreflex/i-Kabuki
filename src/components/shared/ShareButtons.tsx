import { HStack } from "@kuma-ui/core";
import Image from "next/image";

export default function ShareButtons() {
  const btnClasses = "btn btn-square btn-sm";

  return (
    <HStack justify="center" alignItems="center" className="space-x-5">
      <a
        href={"https://www.facebook.com/kabuki092/"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src="/icons/SNS Facebook.svg"
          width={30}
          height={30}
          alt="Instagram"
          className={btnClasses}
        />
      </a>
      <a
        href={"https://www.instagram.com/kabuki_kab/"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src="/icons/SNS instagram.svg"
          width={30}
          height={30}
          alt="Twitter"
          className={btnClasses}
        />
      </a>
      <a
        href={"https://www.threads.net/@kabuki_kab"}
        rel="noopener noreferrer"
        target="_blank"
      >
      <Image
        src="/icons/SNS threads.svg"
        width={30}
        height={30}
        alt="Twitter"
        className={btnClasses}
      />
        </a>
      <Image
        src="/icons/SNS X.svg"
        width={30}
        height={30}
        alt="Twitter"
        className={btnClasses}
      />
    </HStack>
  );
}
