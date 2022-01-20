public class Switch_case {

        public static void main(String[] args) {
            Student s = new Student();
            s.s2();
            s.s1();
            s.s2();
    
            int day = 2;
            switch(day){
                case 1:System.out.println("Today is Monday"); break;
                case 2:System.out.println("Today is Tuesday"); break;
                case 3:System.out.println("Today is Wednesday"); break;
                case 4:System.out.println("Today is Thursday"); break;
                case 5:System.out.println("Today is Friday"); break;
                case 6:System.out.println("Today is Saturday"); break;
                case 7:System.out.println("Today is Sunday"); break;
                default:System.out.println("Day is not found");
            }
        }   
    }  

