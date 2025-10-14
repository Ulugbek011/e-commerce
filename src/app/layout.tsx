import { Provider2 } from "./Provider";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"

    >
      <body>
        <Provider2>


          {children}



        </Provider2>
      </body>
    </html>
  );
}





