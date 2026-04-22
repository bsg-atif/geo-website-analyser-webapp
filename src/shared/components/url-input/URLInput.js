"use client";

import { MoveRight, Link as URL } from "lucide-react";
import styles from "./URLInput.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function URLInput({ initialURL = "" }) {
  const [url, setURl] = useState(initialURL);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const url = formData.get("url");

    const params = new URLSearchParams();
    params.set("url", url);

    router.push(`/dashboard?${params.toString()}`);

    console.log(url);
  };

  useEffect(() => {
    setURl(initialURL);
  }, [initialURL]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.inputWrapper} py-3 px-2 w-full max-w-280 flex flex-wrap gap-x-2
           rounded-2xl`}
    >
      <div className="flex grow-2">
        <URL
          size={24}
          color="var(--color-neutral-0)"
          className="self-center ml-5"
        />
        <input
          defaultValue={url}
          className="p-5 w-full outline-0 font-medium"
          placeholder={"Enter your URL"}
          autoComplete="off"
          type="url"
          name="url"
          id="url"
        />
      </div>
      <button className="bg-neutral-0 p-4 grow text-neutral-900 font-bold rounded-2xl flex gap-x-2 justify-center items-center">
        Analyse Website <MoveRight size={18} strokeWidth={2} />
      </button>
    </form>
  );
}
