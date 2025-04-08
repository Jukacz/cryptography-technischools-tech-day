"use client";

import {useRouter} from "next/navigation";

const IndexPage = () => {
  const router = useRouter();
  router.push("/1");
};

export default IndexPage;
