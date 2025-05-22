import BlogPreview from "./BlogPreview";
function Blog() {
  return (
    <div>
      <div className="flex justify-center items-center pt-15 gap-5 mb-7">
        <span className="inline-block h-[2px] w-[50px] bg-black"></span>
        <h1 className="font-bold text-2xl">OUR BlOG</h1>
        <span className="inline-block h-[2px] w-[50px] bg-black"></span>
      </div>

      <BlogPreview />
    </div>
  );
}
export default Blog;
