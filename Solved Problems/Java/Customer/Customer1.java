package Customer;

public class Customer1 {
    int a,b,c;


    Customer1(int p,int q){
        a = p;
        b = q;
    }; 

    int addition(){
        c = a+b;
        System.out.println("Total of A and B is = "+ c);
        return 1;
    }

}

class Child1 extends Customer1{
   Child1(int p, int q) {
        super(p, q);
        //TODO Auto-generated constructor stub
        System.out.println("This is a child's constructor");
        // System.out.println(p);
    }

int addition(){
        System.out.println("This is my child class");
        // System.out.println(p+"times"+q+"is = "+p*q);
        return 1;
    }
}