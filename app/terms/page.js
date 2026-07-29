import FloatingNav from "@/components/FloatingNav"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"

export default async function TermsOfService() {
  // 1. Locate the file on the file system
  const filePath = path.join(process.cwd(), "app", "terms", "content.md")
  const fileContent = fs.readFileSync(filePath, "utf8")

  // 2. Parse the frontmatter metadata and the actual content
  const { data: frontmatter, content } = matter(fileContent)

  // 3. Render the HTML server-side
  return (
    <div className="min-h-screen bg-transparent">
      <FloatingNav />
      <article className="prose prose-invert max-w-none p-6 mt-[80px]">
        <div className="flex flex-col gap-0 pb-2">
          <div className="text-xl pb-1 font-medium">Terms of Service for PawsOut</div>
          <div className="text-md pb-1">Last Updated: July 28, 2026</div>
        </div>
        <h1>{frontmatter.title}</h1>
        <p className="text-sm text-gray-400">{frontmatter.date}</p>
        <MDXRemote source={content} />
      </article>
    </div>
  )
}
