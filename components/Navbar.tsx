import Link from "next/dist/client/link";
// import Image from 'next/image'
const Navbar = () => {
  const [user, username] = [null, null];
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href={"/"}>
            <button className="btn-logo">SauPou</button>
          </Link>
        </li>
        <div>
          {username ? (
            <div className="flex items-center">
              <li className="push-left">
                <Link href="/admin">
                  <button className="btn-blue">Write Posts</button>
                </Link>
              </li>
              <li>
                <Link href={`/${username}`}>
                  <img src="https://shorturl.at/gmvDL" />
                </Link>
              </li>
            </div>
          ) : (
            <>
              <li>
                <Link href={"/enter"}>
                  <button className="btn-blue">Log in</button>
                </Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
