"use client";
import { postBlog } from "@/services/app.services";
import { useAuth } from "@/store/auth";
import { Form, Formik } from "formik";
import { useRef } from "react";

const PostForm = () => {
  const { status } = useAuth();
  const formRef = useRef(null);

  return (
    <Formik
      initialValues={{
        title: "",
        subtitle: "",
        content: "",
      }}
      validateOnChange={false}
      validateOnBlur={false}
      innerRef={formRef}
      onSubmit={async ({ title, subtitle, content }) => {
        const response = await postBlog({
          title,
          subtitle,
          content,
          author: status.data?.username,
        });
        const { data } = response;
        if (data.status === 0) {
          formRef.current.resetForm();
        }
        console.log(data);
      }}
    >
      {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full gap-4"
        >
          <div className="flex flex-col w-full gap-4 md:gap-8 md:flex-row">
            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                className="p-2 border-gray-400 border-[1px] outline-transparent rounded-md focus:outline-gray-400 focus:border-gray-400 focus-visible:outline-gray-400 focus-visible:border-gray-400"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label htmlFor="subtitle">Subtítulo</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subtitle}
                className="p-2 border-gray-400 border-[1px] outline-transparent rounded-md focus:outline-gray-400 focus:border-gray-400 focus-visible:outline-gray-400 focus-visible:border-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="content">Contenido</label>
            <textarea
              type="text"
              id="content"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              className="p-2 border-gray-400 border-[1px] outline-transparent rounded-md focus:outline-gray-400 focus:border-gray-400 focus-visible:outline-gray-400 focus-visible:border-gray-400 min-h-[300px]"
            />
          </div>
          <button
            type="submit"
            className="self-center px-4 py-2 mt-4 text-white transition-all bg-blue-500 rounded-md w-max hover:bg-blue-600"
          >
            Crear post
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
