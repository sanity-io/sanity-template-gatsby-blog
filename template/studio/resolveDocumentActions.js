// import the default document actions
import defaultResolve from "part:@sanity/base/document-actions";

import { gatsbyPreviewAction } from "sanity-plugin-gatsby-cloud-preview";

export default function resolveDocumentActions(props) {
  return [...defaultResolve(props), gatsbyPreviewAction];
}
