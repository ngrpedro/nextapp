import React, { FormEvent } from "react";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { FormControl, FormLabel, Input, Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

type Inputs = {
  email: string;
  password: string;
};

const login = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="h-screen">
        <section className="bg-gray-200 h-screen flex items-center justify-center">
          <div className="p-10 mx-4 bg-white rounded-md">
            <div className="text-center">
              <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 mb-10">
                Se conecte com a gente
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input {...register("email", { required: true })} />
              </FormControl>
              <FormControl>
                <FormLabel>Senha</FormLabel>
                <Input
                  {...register("password", { required: true })}
                  type="password"
                />
              </FormControl>
              <Stack>
                <Button className="w-full" type="submit">
                  Entrar com email e senha
                </Button>
                <Button
                  className="w-full"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  Entrar com Google
                </Button>
              </Stack>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default login;
