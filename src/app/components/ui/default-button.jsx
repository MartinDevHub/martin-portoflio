export default function DefaultButton({ text, url }) {
  if (url) {
    return (
      <a
        className="text-white bg-blue-900 text-sm sm:text-lg px-6 py-1 rounded-xl mt-3 sm:mb-1 mb-5"
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
        <button className="text-white bg-blue-900 px-6 py-1 rounded-xl cursor-pointer text-sm sm:text-lg mt-3 mb-1">
          {text}
        </button>
      </div>
    );
  }
}
