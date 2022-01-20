import java.util.*;
import java.util.Scanner;

class Bank {
    int accno;
    String name;
    double balance;

    Bank(int accno, String name, double balance) {
        this.accno = accno;
        this.name = name;
        this.balance = balance;
    }
}


class ATM_assign {
    public static void main(String[] args) {
        double withdraw = 0.00, deposit = 0.00;
        System.out.println("*****Welcome to Canara Bank*****");
        System.out.println("Account Details\n");
        Bank b1 = new Bank(10001, "Jenita Gama", 10000.00);

        ArrayList<Bank> accounts = new ArrayList<Bank>();
        accounts.add(b1);

        accounts.get(0);
        System.out.println("Account Number=" + accounts.get(0).accno + "\n" + " Account Holder Name="
                + accounts.get(0).name + "\n" + "Account Balance=" + accounts.get(0).balance + "\n\n");

        Scanner s = new Scanner(System.in);
            while (true) {
                System.out.println("1.Deposit");
                System.out.println("2.Withdraw");
                System.out.println("3.Exit");
                System.out.println("Enter your Choice:");

                try {
                 
                    String str = s.nextLine();
                    int ch = Integer.parseInt(str);
                   
                    switch (ch) {
                        case 1:
                            //String accno;
                           System.out.print("\n Enter Account No : ");
                          try {
                            int accno = s.nextInt();
                                System.out.println("\n Enter Amount You  Want to Deposit : ");
                                deposit = s.nextInt();
                                if (deposit == 0) {
                                    System.out.println("\n Please Enter the amount greater than 0 to Deposit\n");
                                    break;

                                }
                                accounts.get(0).balance = accounts.get(0).balance + deposit;
                                System.out.println("\n Amount Deposited Successfully!!");
                                System.out.println("Available balance is:" + accounts.get(0).balance);
                                System.out.println("");

                            } catch (NumberFormatException e) {
                                System.out.println("Not a valid Input!!Enter numeric value.");
                            }
                            break;

                        case 2:
                            System.out.print("Enter Account No : ");
                            try {
                               int accno = s.nextInt();
                                System.out.println("Enter Amount you Want to withdraw : ");
                                withdraw = s.nextInt();
                                if (withdraw == 0) {
                                    System.out.println("\n Please Enter the amount greater than 1 To withdraw\n");
                                    break;
                                }

                                if (accounts.get(0).balance >= withdraw) {
                                    accounts.get(0).balance = accounts.get(0).balance = withdraw;
                                    System.out.println("\n Amount withdrawn Successfully!!" + "" + withdraw);

                                    System.out.println("Available balance is" + accounts.get(0).balance);
                                } else if (accounts.get(0).balance == 0) {
                                    System.out.println("Insufficent Fund\n");
                                    break;
                                } else {
                                    System.out.println(
                                            "Withdrawal amount should be less than available balance..Transaction Failed..");
                                }
                            } catch (NumberFormatException e) {
                                System.out.println("Not a valid Input!!Enter numeric value.");
                            }
                            break;

                        case 3:
                            System.exit(0);
                            System.out.println("Good Bye..");
                            break;

                        default:
                            System.out.println("\n Select Number between 1 to 3\n");
                 }
                }
                catch (InputMismatchException ie) {
                    System.out.println("Not a valid input" +ie);
                } catch (NumberFormatException ne) {
                    System.out.println("Not a valid input,Enter numeric value" +ne);
                }
            }
        } 
    }


