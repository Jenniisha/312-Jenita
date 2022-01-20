public class Exception_Handlingg {
    public static void main(String[] args) throws Exception {
        int a = 40;
        int b = 10;
        String name = null;
        try{
            int c = a/b;
            System.out.println("c = "+ c);
            System.out.println("name is"+ name.toUpperCase());

        }catch(ArithmeticException e1){
            System.out.println("Exception caught "+e1.getMessage());
        }
        
        catch(NullPointerException e2){
            System.out.println("Exception caught "+e2.getMessage());
        }
        throw new Exception("blah..blah");
       
    }
}
