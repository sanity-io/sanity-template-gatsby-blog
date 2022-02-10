import { PortableText as BasePortableText } from "@portabletext/react";
import React from "react";
import clientConfig from "../../client-config";
import { Figure } from "./Figure";

const components = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node?.author?.name}</span>,
    mainImage: Figure,
  },
};


const PortableText = ({ blocks }) => (
  <BasePortableText
    value={blocks}
    components={components}
    {...clientConfig.sanity}
  />
);

export default PortableText;
