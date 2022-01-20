class User_exception extends Exception{
    public User_exception(String s)
    {
        super(s);
    }

}

 class Example1{
    void productCheck(int product_count) throws User_exception{
        if(product_count<100){
            throw new UserException("product is not Transportable");
        }
       }



public static void main(String args[])
{
    Example1 obj = new Example1();
    try
    {
        obj.productCheck(60);
    }
    catch (User_exception e)
    {
        System.out.println("Caught the exception");
        System.out.println(e.getMessage());
    }
}
}