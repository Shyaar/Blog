const Nav = () => {
    return (
        <>
            <nav className="bg-black flex justify-between px-24 items-center py-3">
                <div id="logo">
                    <h2 className="font-bold text-[34px] text-white"><span className="text-purple-800">BFL.</span>Blog</h2>
                </div>

                <ul className="flex text-white gap-7">
                    <li>Blogs</li>
                    <li>Top Rated</li>
                    <li>Local</li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;