package Controller;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;

public class BookController extends HttpServlet {
    private static final String[] descriptions = {
            "1","2","3","4"
    };

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        String paramFromBrowser = request.getParameter("idLibro");
        int indxDesc = Integer.parseInt(paramFromBrowser);

        String description = descriptions[indxDesc];

        response.setContentType("text/plain");
        try(Writer writer = response.getWriter()){
            writer.write(description);
        }
    }
}
