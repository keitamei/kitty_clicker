import Link from "next/link";

export default function InfoHome() {
    return (
        <Link href="/">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </Link>
    )
}