package Customer;

public class Customer {
    String name = null;
    private int password;
    char gender;
    String status = null;
    String address = null;
    byte age;
    int store;
    

    Customer(String p, int q, char g, String s, String add, byte gg, int ss){
        name = p;
        password = q;
        gender = g;
        status = s;
        address  = add;
        age  = gg;
        store  = ss;
    }

    // public Customer(Object p, int q, int i, Object s, Object add, int j, int ss) {
    // }

    boolean customerInfo(){
        System.out.println("Name = "+name+"\nPassword = "+password+"\nGender = "+gender+"\nStatus = "+status+"\nAddress = "+address+"\nage = "+age); 
        return true;
    }

    int isEven(){
        if (store % 2 == 0){
            System.out.println(store+" "+"is even no.!!!!");
            return 1;
        }
        else{
            System.out.println(store+" "+"is odd no.!!!!");
            return 0;

        }
    }
    
}