import java.sql.*;

public class JDBCDemo {
   static final String DB_URL = "jdbc:mysql://localhost/online_shopping";
   static final String USER = "root";
   static final String PASS = "123";
   static final String QUERY = "SELECT * FROM Customer";

   public static void main(String[] args) {
      // Open a connection
      Connection conn = null;
      try
          {
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery(QUERY);
         // Extract data from result set
         while (rs.next()) {
            // Retrieve by column name
            System.out.print("PASSWORD: " + rs.getInt("pswd"));
            System.out.print(", NAME: " + rs.getString("name"));
            System.out.println(", ID: " + rs.getString("id"));


         }
      } catch (SQLException e) {
         e.printStackTrace();
      } 

      String updateSql = "insert into customer values(\"Santosh\",11111,0);";
      try(Statement stmt = conn.createStatement();){
        stmt.executeUpdate(updateSql);

      }catch(Exception e){

      }
   }
}