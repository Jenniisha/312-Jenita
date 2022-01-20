import java.util.*;

class Employee{
    String name= null;
    int pswd;
    String custId;
    Set<Address> addresses = new HashSet<>();
    Employee(String n, int p){
        name = n;
        pswd = p;
    }
    void display(){
        System.out.println("name = "+name+" password= "+pswd);
        System.out.println();
    }
    void addAddress(Address addr){
        addresses.add(addr);
    }
}



class Address{
    String type;
    int doorNo;
    String streetName;
    String cityName;
    int pinCode;

    Address(String t, int d, String s, String ct, int pin){
        type = t;
        doorNo = d;
        streetName = s;
        cityName = ct;
        pinCode = pin;

    }
}

class Array{
    public static void main(String[] args) {

            Employee[] c1 = new Employee[5];
            c1[0] = new Employee("Jenita", 12345);
            c1[1] = new Employee("Josline", 445445);
            c1[2] = new Employee("Jerald", 4546);
            c1[3] = new Employee("Ankitha", 8667);
            c1[4] = new Employee("Amar", 9787);

            for (int j = 0; j <c1.length; j++){
                c1[j].display();

            // System.out.println(" Object 1:");  
            // c1[0].display();  
            // System.out.println(" Object 2:");  
            // c1[1].display();  
            // System.out.println(" Object 3:");  
            // c1[2].display();  
            // System.out.println(" Object 4:");  
            // c1[3].display();  
            // System.out.println(" Object 5:");  
            // c1[4].display();  


        }



        //collection demo
        List<Employee> myC1 = new ArrayList<>();

            Employee c2 = new Employee("Santhosh", 55645);
            myC1.add(c2);

            Employee c3 = new Employee("Manosh", 75656);
            myC1.add(c3);

            System.out.println(myC1.size());

            for(Employee c:myC1){
                c.display();
            }

            List<Employee> myC2 = new ArrayList<>();

            Employee c4 = new Employee("Ranju", 56565);
            myC2.add(c4);

            Employee c5 = new Employee("Ranjitha", 5654645);
            myC2.add(c5);



            //Merging the collections myC1 and myC2

            myC1.addAll(myC2);

            System.out.println("*********");
            for(Employee c:myC1){
                c.display();
            }


            //use of set****************************************
            Address addr1 = new Address("Home",235, "HMT colony","Bangalore", 123456);

            //mapping********************************************

            Map<String, String> myMap = new HashMap<>();
            Employee cu1 = new Employee("Ranju", 56565);
            cu1.custId = "RPR100";
            Employee cu2 = new Employee("Ranjitha", 5654645);
            cu2.custId = "BLR500";
            myMap.put(cu1.custId, cu1.name);
            myMap.put(cu2.custId, cu2.name);

            System.out.println(myMap.get("BLR500"));

            



    }
}
