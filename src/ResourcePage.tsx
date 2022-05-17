import {
  urls,
  useResource,
  useString,
  useTitle
} from "@tomic/react";

interface Props {
  /** The subject URL - the identifier of the resource. */
  subject: string;
}

/** Takes a Subject URL, fetches the Resource and renders it on a full page */
export function ResourcePage({ subject }: Props) {
  // The useResource hook fetches the subject URL, and converts it into a Resource.
  // The Resource is fetched only once, and it is stored in the Store to be re-used.
  // This Resource contains all its values, and provides various useful methods.
  const resource = useResource(subject);

  // The useTitle hook internally checks for various properties that could be used as a title.
  // If none are available, it will create one from the subject URL.
  const title = useTitle(resource);

  const [description] = useString(resource, urls.properties.description);

  return (
    <div>
      <h2>Title: {title}</h2>
      <p>{description}</p>
    </div>
  );
}
