import {
  properties,
  useResource,
  useString,
  useTitle
} from "@tomic/react";
import PropVal from "./PropVal";

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

  // Render the description property!
  const [description, setDescription] = useString(resource, properties.description, {
    commit: true
  });

  // If something goes wrong while fetching the resource, there will be an error here
  if (resource.error) {
    return <div>{resource.getError().message}</div>;
  }

  // While the resource is being fetched, this will be true
  if (resource.loading) {
    return <div>loading...</div>;
  }

  // And let's also render all the properties that we didn't think of.
  // To do that, we take the map of all the PropVals and render these in a PropVal component.
  const propVals = [...resource.getPropVals()];

  // ... except for the ones we've already rendered!
  const except = [
    properties.description,
    properties.name,
    properties.shortname
  ];

  return (
    <div>
      <h2>Title: {title}</h2>
      <p>{description}</p>
      <textarea onChange={(e) => setDescription(e.target.value)} value={description || ""} />
      {propVals.map(([prop, val]) => {
        if (except.includes(prop)) {
          return null;
        }
        return <PropVal key={prop} propertyURL={prop} value={val} />;
      })}
    </div>
  );
}
