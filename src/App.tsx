function App() {
  return (
    <div className="container mx-auto flex shadow-2xl">
      {/*// TODO: refactor into a component and make it as a Layout */}
      {/* table of content / navigation */}
      <aside className="hidden h-screen shrink-0 basis-1/4 border-r-2 border-gray-200 lg:block">
        <header className="flex items-center gap-x-2 border-b-2 border-gray-200 px-4 py-6">
          <div>ICO</div>
          <h1 className="text-2xl font-bold">Docs</h1>
        </header>

        <ul className="mx-4 my-2">
          <li className="font-bold">
            <div className="flex items-center justify-between">
              <span>Getting Started</span>
              <span>v</span>
            </div>
          </li>
          <li className="text-purple-500">Welcome Page</li>
          <li>How to Install</li>
          <li>Recommended Specs</li>
          <br />
          <li className="font-bold">Table of Content</li>
          <li>How to Step 1</li>
          <li>How to Step 2</li>
          <li>How to Step 3</li>
          <li>How to Step 4</li>
          <li>How to Step 5</li>
          <li>How to Step 6</li>
          <li>How to Step 7</li>
          <li>A very long text to test the layout of this sidebar</li>
          <br />
          <br />
          <br />
          <li>Like this page? Donate</li>
        </ul>
      </aside>

      <section>
        {/*// TODO: refactor into a component and make it as a Layout */}
        <nav className="flex justify-between border-b border-b-gray-200 p-4 lg:justify-end lg:gap-x-2">
          <div className="lg:hidden">[burger ICO]</div>
          <div className="flex gap-x-2">
            <div>[search]</div>
            <div>[theme]</div>
            <div>[lang] v</div>
          </div>
        </nav>

        {/* content */}
        <main className="m-6">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio doloremque quis recusandae animi illum!
            Nesciunt, voluptate consectetur ullam magni deserunt labore eligendi sapiente explicabo excepturi accusamus
            rerum corrupti eos nostrum.
          </p>
        </main>
      </section>
    </div>
  );
}

export default App;
