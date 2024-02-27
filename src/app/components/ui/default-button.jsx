export default function DefaultButton({ text, url }) {
  const buttonStyle =
    "font-bold text-white bg-blue-900 hover:bg-gray-500 hover:text-blue-900 px-6 py-1 rounded-xl cursor-pointer text-sm sm:text-lg mt-3 mb-1";

  if (url) {
    return (
      <a
        className={buttonStyle}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  } else {
    return (
      <div>
        <button className={buttonStyle}>{text}</button>
      </div>
    );
  }
}
