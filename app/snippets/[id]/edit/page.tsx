import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import SnippetNotFound from "../not-found";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const SnippetEditPage = async (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return SnippetNotFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
