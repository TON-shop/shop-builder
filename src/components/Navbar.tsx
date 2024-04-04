import Icon from "../common/Icon";

const navbarItems = [
  "analytics",
  "paid",
  "person",
  "description",
  "logout",
] as const;

function A() {
  return (
    <nav className="text-black fixed bottom-0 left-0 flex justify-around w-full py-4 bg-primary">
      {navbarItems.map((item, i) => (
        <Icon icon={item} key={i} className="text-[2rem]" />
      ))}
    </nav>
  );
}

function B(props: { name: string }) {
  return <>Hi {props.name}</>;
}

const Navbar = { A, B };

export default Navbar;
