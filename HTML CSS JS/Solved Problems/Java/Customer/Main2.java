import Customer.Child1;
import Customer.Customer1;

class Main1 {
    public static void main(String[] args) {
        Customer1 c1 = new Customer1(5,10);
        Child1 c2 = new Child1(25,30);
        System.out.println(c1.addition());
        System.out.println(c2.addition());

    }
}
