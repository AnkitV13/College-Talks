import type { NextPage } from "next";

import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import { Login } from "@/containers/Login";

const Home: NextPage = () => {
    return (
        <Layout
            meta={<Meta title="Login | College Talks | SMVDU" />}
            displayNav={false}
            displayFooter={false}
        >
            <Login />
        </Layout>
    );
};

export default Home;
