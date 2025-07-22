import { useBlog } from "_data/fetchers";
import { useParams } from "next/navigation";
import CategoriesList from "../_components/CategoriesList";
import { Input, Label } from "../_components/utilities";

export default function BlogFields() {
  const { blogId } = useParams<{ blogId: string }>();
  const { blog } = useBlog(blogId);

  return (
    <div className="flex flex-col gap-5">
      {blog && (
        <>
          <Input
            required
            hidden
            name="id"
            type="text"
            defaultValue={blog?.id}
            readOnly
          />
          <Label title="عنوان">
            <Input required name="blogTitle" defaultValue={blog?.title} />
          </Label>
          <Label title="توضیحات">
            <Input
              required
              name="blogDescription"
              defaultValue={blog?.description}
            />
          </Label>
          <Label title="آدرس تصویر اصلی">
            <Input name="blogImage" defaultValue={blog?.image} />
          </Label>
          <CategoriesList />
        </>
      )}
    </div>
  );
}
