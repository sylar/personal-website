import { TPageProps } from "./types";
const Page: React.FunctionComponent<TPageProps> = props => {
  return <main className="container md mx-auto">{props.children}</main>;
};

export default Page;
