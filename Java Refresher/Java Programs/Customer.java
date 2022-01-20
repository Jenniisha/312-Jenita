public class Customer {
    String name = null;
    private int password;


    Customer(String p, int q){
        name = p;
        password = q;
    }

    boolean login(String n, int p){
        if((name == n) && (password == p)){
            System.out.println("Login successful");
            return true;
        }
        else
        {
            System.out.println("Login Failed");
            return false;
        }  
    }
}