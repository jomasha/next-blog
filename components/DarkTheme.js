function DarkTheme() {
    return (
        <style jsx global>{`
               /* Dark Theme */
                :root {
                --background-color: rgb(36, 34, 34);
                --link-color: rgb(185, 185, 8);
                --text-color: rgb(214, 211, 211);
                }
            `}
        </style>
    );
}
export default DarkTheme;