"use client";

import { putRatingBlog } from "@/services/app.services";
import { useAuth } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Rating = ({ blogId, initialRating }) => {
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState(0);
  const { status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const exist = initialRating.find(({ id }) => id === status.data?.["id"]);
    if (exist) {
      setRating(exist.rating);
      setSelected(exist.rating);
    }
  }, []);

  const onHover = (e) => {
    const value = Number(e.currentTarget.id);
    if (selected === 0) {
      setRating(value);
    }
  };

  const onLeave = () => {
    setRating(selected);
  };

  const onClick = async (value) => {
    if (status.state === "logged") {
      if (selected === 0) {
        setSelected(value);
        await putRatingBlog({
          id_blog: blogId,
          rating: value,
          id_user: status.data["id"],
        });
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-row" onMouseLeave={onLeave}>
      <label
        className={`${rating >= 1 ? "text-orange-400" : "text-gray-500"}
        ${selected > 0 ? "cursor-default" : "cursor-pointer"}
        text-3xl`}
        htmlFor="radio1"
        onMouseOver={onHover}
        onClick={() => onClick(1)}
        id="1"
      >
        ★
      </label>

      <label
        className={`${rating >= 2 ? "text-orange-400" : "text-gray-500"}
        ${
          selected > 0 ? "cursor-default" : "cursor-pointer"
        } text-3xl cursor-pointer`}
        htmlFor="radio2"
        onMouseOver={onHover}
        onClick={() => onClick(2)}
        id="2"
      >
        ★
      </label>

      <label
        className={`${rating >= 3 ? "text-orange-400" : "text-gray-500"}
        ${
          selected > 0 ? "cursor-default" : "cursor-pointer"
        } text-3xl cursor-pointer`}
        htmlFor="radio3"
        onMouseOver={onHover}
        onClick={() => onClick(3)}
        id="3"
      >
        ★
      </label>

      <label
        className={`${rating >= 4 ? "text-orange-400" : "text-gray-500"}
        ${
          selected > 0 ? "cursor-default" : "cursor-pointer"
        } text-3xl cursor-pointer`}
        htmlFor="radio4"
        onMouseOver={onHover}
        onClick={() => onClick(4)}
        id="4"
      >
        ★
      </label>

      <label
        className={`${rating >= 5 ? "text-orange-400" : "text-gray-500"}
        ${
          selected > 0 ? "cursor-default" : "cursor-pointer"
        } text-3xl cursor-pointer`}
        htmlFor="radio5"
        onMouseOver={onHover}
        onClick={() => onClick(5)}
        id="5"
      >
        ★
      </label>
    </div>
  );
};

export default Rating;
