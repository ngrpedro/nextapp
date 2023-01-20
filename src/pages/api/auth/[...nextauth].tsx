import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "827320188330-tsvnul9kr198a6gdeceq4mhbf6ag2taq.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "b4726c800329a95f4d0b6642e7dc02d0",
});
