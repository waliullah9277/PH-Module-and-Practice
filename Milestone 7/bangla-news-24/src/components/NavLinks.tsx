import Link from "next/link";

interface INavLinks {
    slug: string
    title: string
    topicId: null | string
    url: string
    scrapable: boolean
}

const NavLinks = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navlinks: INavLinks[] = data.data
    const navlinksFilterd = navlinks.filter(n => n.scrapable)

    return (
        <div className="flex justify-center gap-3 container mx-auto">
            <Link className="hover:text-red-600" href={"/"}>হোম</Link>
            {
                navlinksFilterd.map((n, i) => {
                    return <Link className="hover:text-red-600" key={i} href={n.slug} >{n.title}</Link>
                })
            }
        </div>
    );
};

export default NavLinks;