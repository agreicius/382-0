var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets",
  "body": " Sets  We will gradually make our way to definitions of the vector spaces and linear transformations mentioned in this text's title. For now it will suffice to observe that a vector space is a certain kind of set , and a linear transformation is a special type of function . Accordingly we gather here some notions about sets and (in the next section) functions that will come in handy once we meet the two main players of linear algebra.   Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .     The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .   With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .     Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets complement  sets intersection  sets complement  sets difference    set union     set complement     set intersection       set difference    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .       With the help of these set operations, we can now describe some common sets used in mathematics.   Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     the real numbers     the integers     the rational numbers    We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .    "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": " The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations. We describe these notions in more detail in , and we outline techniques for proving if and only if and if-then statements, including statements about set equality and the subset relation, in .  "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": " Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .  "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets complement  sets intersection  sets complement  sets difference    set union     set complement     set intersection       set difference    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, the union of a collection of subsets of is defined as .    Set intersection  The intersection  of and is defined as . More generally, the intersection of a collection of subsets of is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     the real numbers     the integers     the rational numbers    We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .   "
},
{
  "id": "s_functions",
  "level": "1",
  "url": "s_functions.html",
  "type": "Section",
  "number": "0.2",
  "title": "Functions",
  "body": " Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function      Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   Injective  The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    Surjective  The function is surjective (or onto ) if for all , there is an such that : equivalently, .    Bijective  The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , .  The function in this case is called the inverse of , denoted .     Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.     The proof of this theorem is left as an example of proving if and only if statements. See .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_functions.html#d_function",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "s_functions-3",
  "level": "2",
  "url": "s_functions.html#s_functions-3",
  "type": "Example",
  "number": "0.2.2",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "eg_addition_mult_as_functions",
  "level": "2",
  "url": "s_functions.html#eg_addition_mult_as_functions",
  "type": "Example",
  "number": "0.2.3",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": " Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .  "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.2.5",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_functions.html#d_image",
  "type": "Definition",
  "number": "0.2.6",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.2.7",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   Injective  The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    Surjective  The function is surjective (or onto ) if for all , there is an such that : equivalently, .    Bijective  The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "s_functions-10",
  "level": "2",
  "url": "s_functions.html#s_functions-10",
  "type": "Example",
  "number": "0.2.8",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.2.9",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.2.10",
  "title": "Identity and inverse functions.",
  "body": " Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , .  The function in this case is called the inverse of , denoted .   "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.2.11",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "s_functions-14",
  "level": "2",
  "url": "s_functions.html#s_functions-14",
  "type": "Proof",
  "number": "0.2.1",
  "title": "",
  "body": " The proof of this theorem is left as an example of proving if and only if statements. See .  "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.3",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.        A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:      Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )     Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.     Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .   Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .        Truth depends on domain of discourse  Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.    Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters  As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.    Negating quantifiers  Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.3.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.3.2",
  "title": "",
  "body": " A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:   "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.3.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.3.4",
  "title": "",
  "body": " Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.  "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.3.5",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .   Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .      "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.3.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse  Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.  "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.3.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.3.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters  As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.  "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.3.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers  Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.   "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.3.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.4",
  "title": "Proof techniques",
  "body": " Proof techniques   Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.    Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)   The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )     Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).   It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.    is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .    Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .     Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.      Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities  Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .   Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  According to , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      Mathematical induction  mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    Proof by induction  mathematical induction weak induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.    Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!   Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions         Proof by strong induction  mathematical induction strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.4.1",
  "title": "",
  "body": " The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )  "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.4.2",
  "title": "",
  "body": " It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.  "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.4.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.    is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .    Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.4.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.4.5",
  "title": "",
  "body": " Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.  "
},
{
  "id": "sss_chain_equalities-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-3",
  "type": "Warning",
  "number": "0.4.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.4.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.  "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.4.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.4.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.4.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_arithmetic",
  "level": "1",
  "url": "s_arithmetic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Complex arithmetic",
  "body": " Complex arithmetic   Complex numbers   Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real component , denoted , and we call its imaginary part , denoted : , we have .     Real and complex variable names  An ongoing theme in complex analysis will be the relationship between the real numbers and the complex numbers. To help distinguish between these sets, we establish the following naming convention for constants:   The letters will be reserved for denoting real constants.    The letters and will be reserved for denoting complex numbers.   This convention allows us to introduce a complex number without explicitly specifying that and are real numbers. Note that as stated the convention only applies to the symbols above. We will likely have occasion to make use of other constant names ( , r, s, t, u, v), and when we do we will make explicit whether they denote a real or complex number.   You are justified in wondering what exactly is meant by a formal expression . A more correct formulation would be that a complex number is really just a pair of real numbers that for various reasons we denote as . Since it is somewhat awkward to write a complex number as , we will live with the ambiguity of , and identify complex numbers as pairs of real numbers via the map . To ensure that this is a well-defined bijection between and , we make official when two of our formal expressions are defined to be equal.   Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .    For reasons that will be made more clear below, it is natural to identify the set of real numbers with the set of complex numbers of the form . This is the motivation behind the next definition.   Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .      Complex plane   ensures that the map defines a ibjection between and , allowing us to identify complex numbers as pairs of real numbers. This identification in turn gives rise to a visual representation of complex numbers as points in the Cartesian plane , called the complex plane in this context. To make clear that we are using to visualize , we label the horizontal and vertical axes as and .   Complex plane   Complex plane: points     Using our identification , we see that the real numbers are represented geometrically as the -axis of the complex plane. Similarly, the purely imaginary complex numbers are represented geometrically as the the -axis of the complex plane. As you will see, we will get a lot of mileage out of this geometric representation of complex numbers.    Arithmetic operations  Having defined the complex numbers as a set and given this set some geometric content, we now define some essential operations on .   Addition, subtraction, multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex subtraction  We define the additive inverse of , denoted , as , and the difference of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .        Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   (where is real)     (where is purely imaginary)          We have .    We have .    We have .    We have .    We have .        Real arithmetic  As the last example illustrates, the arithmetic interaction of the real numbers with other complex numbers is particularly simple. For example, for any real number and complex number , we have . In particular, given two real numbers and , we have . In other words, the complex arithmetic of the real numbers, considered now as a subset of the complex numbers, behaves exactly as it does considering the real numbers on their own. We summarize this by saying that the operations of complex addition and complex multiplication are extensions of real addition and real multiplication. In this sense we can think of the complex number system as an extension of the real number system. (Using fancier language from abstract algebra, we say that is a ring extension of .)   The next theorem tells us that complex addition and multiplication are just as well-behaved as their real counterparts. More specifically, using some fancy abstract algebra jargon, the theorem asserts that , together with its addition and multiplication operations, constitutes a ring .   Ring axioms   Let be complex numbers.   Addition is associative   .    Addition is commutative   .    Additive identity   .    Additive inverse   .    Multiplication is associative   .    Multiplication is commutative   .    Multiplicative identity   .    Distributivity   .       Each property above follows in a straightforward manner from the definitions of these complex operations in combination with familiar properties of real number arithmetic. We prove (6) below, leaving the rest of the proofs as an exercise.  Let and . We have , as desired.      Now that we have established that complex multiplication is commutative, we are free to write a complex number as . Oftentimes one of these expressions simply looks better typographically than the other.  Note that when writing and , where , it is still the case that if and only if and .    as real vector space  It follows from that is a real vector space (or vector space over the reals), where we define vector addition to be complex addition, and scalar multiplication by a real number to be complex multiplication by . Furthermore, it is easy to see that the set is a basis of as a real vector space: indeed, by definition, every element of can be written as a real linear combination of and in a unique way. Since , we see that is a 2-dimensional vector space over , consistent with our identification above of and .  Continuing in this vein, note that , a one-dimensional subspace of . It follows that can be understood as the smallest subspace containing and the element . This is sometimes expressed as being generated over by .    Real square roots   Show that every real number has a square-root in : , show that there is a satisfying . (By definition, . See .)    We seek such that the complex number satisfies . Since , we see, using , that if and only if . We now endeavor to solve the (quadratic) system of equations above. We proceed in cases with respect to whether is zero, positive or negative. Note first that in all cases, the second equation is true if and only if or .  Case: . In this case, it is clear that the only solution to the system above is . Thus is the only complex square-root of .  Case: . If (to satisfy the second equation), then if and only if , which is impossible since and . Thus we must have , in which case implies . (Note that , the positive square-root of , exists, since is positive.) It follows that has exactly two square-roots in this case: and .  Case: . In this case we cannot have , since the first equation would imply , which is impossible since is negative. Setting , we then see that or . (Again, note that is a well-defined real number since is positive.) We conclude in this case that has exactly two square-roots: and .  We can summarize our analysis above as follows: any has a complex square-root , and in fact we have . Here we have used the fact that .     Adding square-root of to  It follows from our work in that : , is a square-root of . This observation gives rise to a more motivated understanding of the complex number system . Roughly speaking, we can think of as the smallest number system containing and a square-root of that we call . (I say roughly here as I haven't really told you what I mean by a number system, or by the smallest number system.) Furthermore, we can think of the definition of complex multiplication given by as forced upon us: that is, it is the unique multiplication operation on that is associative, commutative, and satisfies .   Our last result tells us that, as in real number arithmetic, all nonzero complex numbers have a multiplicative inverse . Reaching again for some fancy language from abstract algebra, this fact, in conjunction with , means that , like , is a field .   Multiplicative inverses   Let be a nonzero complex number: , or (or both). There is a unique complex number satisfying : namely, .    The fact that is easily verified using the definition of multiplication given by . As for uniqueness, given any other complex number , we have , showing that is the only complex number satisfying this property.     Multiplicative inverses and quotients   Let be a nonzero complex number: , or . The (multiplicative) inverse of , denoted or , is defined as . Given complex numbers with , the quotient of by , denoted , is defined as .     Inverses and quotients   Compute the following complex numbers. Your answer must be expressed in the form , where .    , where                , where and      , where and           Using the formula , we have .    By definition, we have .    Using formula , we see easily that .    It is easy to see that for a real number , we have , and hence .    It is easy to see, in general that for any complex numbers . Thus we have .        Integer powers   Let be an integer.   Case:  Given , we define .    Case:  Given and , we define .    Case:  Given and nonzero , we set where is positive, and define .        "
},
{
  "id": "d_complex_numbers",
  "level": "2",
  "url": "s_arithmetic.html#d_complex_numbers",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Complex numbers, real and imaginary parts.",
  "body": " Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real component , denoted , and we call its imaginary part , denoted : , we have .   "
},
{
  "id": "ss_complex-numbers-3",
  "level": "2",
  "url": "s_arithmetic.html#ss_complex-numbers-3",
  "type": "Convention",
  "number": "1.1.2",
  "title": "Real and complex variable names.",
  "body": " Real and complex variable names  An ongoing theme in complex analysis will be the relationship between the real numbers and the complex numbers. To help distinguish between these sets, we establish the following naming convention for constants:   The letters will be reserved for denoting real constants.    The letters and will be reserved for denoting complex numbers.   This convention allows us to introduce a complex number without explicitly specifying that and are real numbers. Note that as stated the convention only applies to the symbols above. We will likely have occasion to make use of other constant names ( , r, s, t, u, v), and when we do we will make explicit whether they denote a real or complex number.  "
},
{
  "id": "d_complex_equality",
  "level": "2",
  "url": "s_arithmetic.html#d_complex_equality",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Complex equality.",
  "body": " Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .   "
},
{
  "id": "d_real_imaginary",
  "level": "2",
  "url": "s_arithmetic.html#d_real_imaginary",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Real and imaginary numbers.",
  "body": " Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .   "
},
{
  "id": "ss_complex-plane-2",
  "level": "2",
  "url": "s_arithmetic.html#ss_complex-plane-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex plane "
},
{
  "id": "fig_complex_plane",
  "level": "2",
  "url": "s_arithmetic.html#fig_complex_plane",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " Complex plane   Complex plane: points    "
},
{
  "id": "d_sum_product",
  "level": "2",
  "url": "s_arithmetic.html#d_sum_product",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Addition, subtraction, multiplication.",
  "body": " Addition, subtraction, multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex subtraction  We define the additive inverse of , denoted , as , and the difference of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .      "
},
{
  "id": "eg_arithmetic",
  "level": "2",
  "url": "s_arithmetic.html#eg_arithmetic",
  "type": "Example",
  "number": "1.1.7",
  "title": "Complex arithmetic.",
  "body": " Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   (where is real)     (where is purely imaginary)          We have .    We have .    We have .    We have .    We have .      "
},
{
  "id": "ss_arithmetic-5",
  "level": "2",
  "url": "s_arithmetic.html#ss_arithmetic-5",
  "type": "Remark",
  "number": "1.1.8",
  "title": "Real arithmetic.",
  "body": " Real arithmetic  As the last example illustrates, the arithmetic interaction of the real numbers with other complex numbers is particularly simple. For example, for any real number and complex number , we have . In particular, given two real numbers and , we have . In other words, the complex arithmetic of the real numbers, considered now as a subset of the complex numbers, behaves exactly as it does considering the real numbers on their own. We summarize this by saying that the operations of complex addition and complex multiplication are extensions of real addition and real multiplication. In this sense we can think of the complex number system as an extension of the real number system. (Using fancier language from abstract algebra, we say that is a ring extension of .)  "
},
{
  "id": "th_ring_ops",
  "level": "2",
  "url": "s_arithmetic.html#th_ring_ops",
  "type": "Theorem",
  "number": "1.1.9",
  "title": "Ring axioms.",
  "body": " Ring axioms   Let be complex numbers.   Addition is associative   .    Addition is commutative   .    Additive identity   .    Additive inverse   .    Multiplication is associative   .    Multiplication is commutative   .    Multiplicative identity   .    Distributivity   .       Each property above follows in a straightforward manner from the definitions of these complex operations in combination with familiar properties of real number arithmetic. We prove (6) below, leaving the rest of the proofs as an exercise.  Let and . We have , as desired.   "
},
{
  "id": "ss_arithmetic-8",
  "level": "2",
  "url": "s_arithmetic.html#ss_arithmetic-8",
  "type": "Convention",
  "number": "1.1.10",
  "title": "<span class=\"process-math\">\\(a+ib=a+bi\\)<\/span>.",
  "body": "  Now that we have established that complex multiplication is commutative, we are free to write a complex number as . Oftentimes one of these expressions simply looks better typographically than the other.  Note that when writing and , where , it is still the case that if and only if and .  "
},
{
  "id": "ss_arithmetic-9",
  "level": "2",
  "url": "s_arithmetic.html#ss_arithmetic-9",
  "type": "Remark",
  "number": "1.1.11",
  "title": "<span class=\"process-math\">\\(\\C\\)<\/span> as real vector space.",
  "body": " as real vector space  It follows from that is a real vector space (or vector space over the reals), where we define vector addition to be complex addition, and scalar multiplication by a real number to be complex multiplication by . Furthermore, it is easy to see that the set is a basis of as a real vector space: indeed, by definition, every element of can be written as a real linear combination of and in a unique way. Since , we see that is a 2-dimensional vector space over , consistent with our identification above of and .  Continuing in this vein, note that , a one-dimensional subspace of . It follows that can be understood as the smallest subspace containing and the element . This is sometimes expressed as being generated over by .  "
},
{
  "id": "eg_square_roots",
  "level": "2",
  "url": "s_arithmetic.html#eg_square_roots",
  "type": "Example",
  "number": "1.1.12",
  "title": "Real square roots.",
  "body": " Real square roots   Show that every real number has a square-root in : , show that there is a satisfying . (By definition, . See .)    We seek such that the complex number satisfies . Since , we see, using , that if and only if . We now endeavor to solve the (quadratic) system of equations above. We proceed in cases with respect to whether is zero, positive or negative. Note first that in all cases, the second equation is true if and only if or .  Case: . In this case, it is clear that the only solution to the system above is . Thus is the only complex square-root of .  Case: . If (to satisfy the second equation), then if and only if , which is impossible since and . Thus we must have , in which case implies . (Note that , the positive square-root of , exists, since is positive.) It follows that has exactly two square-roots in this case: and .  Case: . In this case we cannot have , since the first equation would imply , which is impossible since is negative. Setting , we then see that or . (Again, note that is a well-defined real number since is positive.) We conclude in this case that has exactly two square-roots: and .  We can summarize our analysis above as follows: any has a complex square-root , and in fact we have . Here we have used the fact that .   "
},
{
  "id": "ss_arithmetic-11",
  "level": "2",
  "url": "s_arithmetic.html#ss_arithmetic-11",
  "type": "Remark",
  "number": "1.1.13",
  "title": "Adding square-root of <span class=\"process-math\">\\(-1\\)<\/span> to <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Adding square-root of to  It follows from our work in that : , is a square-root of . This observation gives rise to a more motivated understanding of the complex number system . Roughly speaking, we can think of as the smallest number system containing and a square-root of that we call . (I say roughly here as I haven't really told you what I mean by a number system, or by the smallest number system.) Furthermore, we can think of the definition of complex multiplication given by as forced upon us: that is, it is the unique multiplication operation on that is associative, commutative, and satisfies .  "
},
{
  "id": "th_mult_inv",
  "level": "2",
  "url": "s_arithmetic.html#th_mult_inv",
  "type": "Theorem",
  "number": "1.1.14",
  "title": "Multiplicative inverses.",
  "body": " Multiplicative inverses   Let be a nonzero complex number: , or (or both). There is a unique complex number satisfying : namely, .    The fact that is easily verified using the definition of multiplication given by . As for uniqueness, given any other complex number , we have , showing that is the only complex number satisfying this property.   "
},
{
  "id": "d_mult_inv",
  "level": "2",
  "url": "s_arithmetic.html#d_mult_inv",
  "type": "Definition",
  "number": "1.1.15",
  "title": "Multiplicative inverses and quotients.",
  "body": " Multiplicative inverses and quotients   Let be a nonzero complex number: , or . The (multiplicative) inverse of , denoted or , is defined as . Given complex numbers with , the quotient of by , denoted , is defined as .   "
},
{
  "id": "eg_inverses",
  "level": "2",
  "url": "s_arithmetic.html#eg_inverses",
  "type": "Example",
  "number": "1.1.16",
  "title": "Inverses and quotients.",
  "body": " Inverses and quotients   Compute the following complex numbers. Your answer must be expressed in the form , where .    , where                , where and      , where and           Using the formula , we have .    By definition, we have .    Using formula , we see easily that .    It is easy to see that for a real number , we have , and hence .    It is easy to see, in general that for any complex numbers . Thus we have .      "
},
{
  "id": "d_integer_powers",
  "level": "2",
  "url": "s_arithmetic.html#d_integer_powers",
  "type": "Definition",
  "number": "1.1.17",
  "title": "Integer powers.",
  "body": " Integer powers   Let be an integer.   Case:  Given , we define .    Case:  Given and , we define .    Case:  Given and nonzero , we set where is positive, and define .      "
},
{
  "id": "s_polar",
  "level": "1",
  "url": "s_polar.html",
  "type": "Section",
  "number": "1.2",
  "title": "Geometry of complex numbers",
  "body": " Geometry of complex numbers   In this section we will explore further the geometric nature of complex numbers that arises from our identification of with .    Geometry of complex addition  Under our identification of with , complex addition corresponds with vector addition: . Before interpreting this operation geometrically, we first recall that there are two distinct ways of visualizing a pair : either as a point , or as an arrow (or directed line segment) starting at some initial point of your choosing and ending at the terminal point . This multitude of representations carries over to our visualization of complex numbers . Below you see three different complex plane representations of the complex number : as the point , as the arrow from to , and as the arrow from to . Observe how the placement of our label varies depending on whether we consider as a point or an arrow.   Different visualizations of   Different visualizations of     The geometric interpretation of vector addition in (and hence complex addition) makes use of this arrow representation of pairs. In more detail, given pairs and , we pick any initial point , then write and , where and use the tip-to-tail method to produce .    Modulus  The definition of the modulus of a complex number , has a clear connection with our various visualizations of : it is the length of any arrow representation of ; or equivalently, the distance between and ; or equivalently, the norm of , thinking of as a vector.   Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .    For , we have , which is precisely the length of the various arrow representations of .   Visualizing the modulus of   Visualizing the modulus of      Complex numbers of unit length  Observe that is a complex number of unit length if and only if the point lies on the unit circle . Thus we obtain the following nifty complex description of the unit circle: .    Modulus of difference  How do we interpret for complex numbers and ? Let's unpack things: we can visualize as the arrow from to , and thus is just the length of this arrow. Equivalently, is the distance between and .    Circles and discs   Define and . Sketch the sets and in the complex plane, and give identify them as familiar geometric objects.    Using the observation from , we see that is the set of points whose distance to is , while is the set of points whose distance to is at most 2. Geometrically, is the circle of radius centered at and is the closed disk of radius 2 centered at : , .    Since is the same thing as for a complex number , we obtain lots of useful properties of the complex modulus essentially for free from elementary linear algebra facts about the norms of vectors. This is the case for all of the statements in the following theorem, save the last one.   Modulus properties   Let and be complex numbers.   Positivity   , and if and only if .    Triangle inequality   .    Triangle inequality variation   .    Components modulus   and .    Multiplicative property   .       As mentioned above, all but the last statement follow directly from elementary linear algebra facts. We give a proof of statement (5). Letting and , we have .     Inequality statements  One important difference between and is that the former is equipped with the relation, and that this relation does not extend to in a useful way. Since we now think of as a subset of , however, we will still have occasion to make assertions about real complex numbers that involve . As such, whenever we state something of the form , both and are understood to be real complex numbers.    Sums of squares  The multiplicative property of the modulus gives rise to an elegant proof of the following fact about integers: if and are integers that can be expressed as the sum of two square integers, then can be written as the sum of two square integers. For example, we have , , and . This fact, known variously as the Brahmagupta identity, Fibonacci identity, and Brahmagupta-Fibonacci identity, was known to mathematicians since Diophantus. A proof using the complex modulus was given by Euler in the 18th century. Try and prove it yourself in this manner.     Complex conjugation  We now introduce complex conjugation, which like the modulus operation has a strong connection to the geometry of the complex plane.   Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .    What is the geometric relationship between and ? Identifying with the point and with the point , we see that can be thought of as the reflection of through the -axis. In other words, the operation of complex conjugation corresponds to reflection through the -axis.   Conjugation as reflection   Conjugation as reflection     You are likely wondering why reflection through the -axis would prove to be useful when considered as an operation on complex numbers. The next theorem is a form of answer to this question, as it illustrates how reflection ( , conjugation) respects the other complex operations, including our new friend the modulus.   Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .         Polar form  Recall that for any pair we can write for some , and we call and  polar coordinates of the point in this case. These polar coordinates are not unique, but we do have the following fact: if is nonzero, and we have with and , then and for some integer . This leads directly to the following result about complex numbers.   Polar form   Let be a complex number.   We have for some nonnegative and . The choice of here is unique; in fact, we have .    If and we have for , then for some integer .        Polar form   Let be a complex number, and suppose and satisfy . We call the expression a polar form of and we call an argument of .  If , we define to be the unique satisfying , and we define to be the set of all arguments of . Equivalently, .     Polar form   Find a polar form for the given , and compute and .                     Polar form properties   Let and where .         .     .    If , then .        Geometric interpretation of complex operations  Each of the identities of can be understood as providing a geometric interpretation of one of our complex operations.  In particular, statement (3) provides us with a more satisfying description of complex multiplication than the algebraic formula given by . Roughly speaking, the identity tells us that to multiply two complex numbers, we (a) add their arguments and (b) multiply their moduli.  Alternatively, tells us that to multiply by , we (a) rotate (considered as a point) by an angle about the origin, and (b) scale its distance from the origin by .  Similarly, tells us that the inverse of a complex number is obtained by taking the reciprocal of its modulus (the in the formula), and flipping its argument (the in the formula).    Polar form arithmetic   Let and . Compute the following complex numbers. Your answer should be expressed in polar form.    .     .            Multiplication by elements of  Recall that we can identify the unit circle as the set of all complex numbers of unit length: , . Fix . Since , has a polar expression of the form for some . It follows from our geometric description of complex multiplication that multiplication by is the same thing as rotation by about the origin. This is a surprising (and useful) connection between a geometric operation on (rotation by ), and an algebraic operation on (multiplication by ).  In more detail, we have the following complex-algebraic description of rotation by the angle :   set ;    given point , let ;    compute ;    the result of rotating by is then .   Verify for yourself that we get the same result by multiplying (considered as a column vector) by the rotation matrix  .    "
},
{
  "id": "fig_pairs_as_arrows",
  "level": "2",
  "url": "s_polar.html#fig_pairs_as_arrows",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Different visualizations of   Different visualizations of    "
},
{
  "id": "d_modulus",
  "level": "2",
  "url": "s_polar.html#d_modulus",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Complex modulus.",
  "body": " Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .   "
},
{
  "id": "fig_modulus",
  "level": "2",
  "url": "s_polar.html#fig_modulus",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Visualizing the modulus of   Visualizing the modulus of    "
},
{
  "id": "ss_conjugation_modulus-6",
  "level": "2",
  "url": "s_polar.html#ss_conjugation_modulus-6",
  "type": "Remark",
  "number": "1.2.4",
  "title": "Complex numbers of unit length.",
  "body": " Complex numbers of unit length  Observe that is a complex number of unit length if and only if the point lies on the unit circle . Thus we obtain the following nifty complex description of the unit circle: .  "
},
{
  "id": "rm_mod_diff",
  "level": "2",
  "url": "s_polar.html#rm_mod_diff",
  "type": "Remark",
  "number": "1.2.5",
  "title": "Modulus of difference.",
  "body": " Modulus of difference  How do we interpret for complex numbers and ? Let's unpack things: we can visualize as the arrow from to , and thus is just the length of this arrow. Equivalently, is the distance between and .  "
},
{
  "id": "eg_circle",
  "level": "2",
  "url": "s_polar.html#eg_circle",
  "type": "Example",
  "number": "1.2.6",
  "title": "Circles and discs.",
  "body": " Circles and discs   Define and . Sketch the sets and in the complex plane, and give identify them as familiar geometric objects.    Using the observation from , we see that is the set of points whose distance to is , while is the set of points whose distance to is at most 2. Geometrically, is the circle of radius centered at and is the closed disk of radius 2 centered at : , .   "
},
{
  "id": "th_modulus",
  "level": "2",
  "url": "s_polar.html#th_modulus",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Modulus properties.",
  "body": " Modulus properties   Let and be complex numbers.   Positivity   , and if and only if .    Triangle inequality   .    Triangle inequality variation   .    Components modulus   and .    Multiplicative property   .       As mentioned above, all but the last statement follow directly from elementary linear algebra facts. We give a proof of statement (5). Letting and , we have .   "
},
{
  "id": "ss_conjugation_modulus-11",
  "level": "2",
  "url": "s_polar.html#ss_conjugation_modulus-11",
  "type": "Convention",
  "number": "1.2.8",
  "title": "Inequality statements.",
  "body": " Inequality statements  One important difference between and is that the former is equipped with the relation, and that this relation does not extend to in a useful way. Since we now think of as a subset of , however, we will still have occasion to make assertions about real complex numbers that involve . As such, whenever we state something of the form , both and are understood to be real complex numbers.  "
},
{
  "id": "ss_conjugation_modulus-12",
  "level": "2",
  "url": "s_polar.html#ss_conjugation_modulus-12",
  "type": "Remark",
  "number": "1.2.9",
  "title": "Sums of squares.",
  "body": " Sums of squares  The multiplicative property of the modulus gives rise to an elegant proof of the following fact about integers: if and are integers that can be expressed as the sum of two square integers, then can be written as the sum of two square integers. For example, we have , , and . This fact, known variously as the Brahmagupta identity, Fibonacci identity, and Brahmagupta-Fibonacci identity, was known to mathematicians since Diophantus. A proof using the complex modulus was given by Euler in the 18th century. Try and prove it yourself in this manner.  "
},
{
  "id": "d_conj",
  "level": "2",
  "url": "s_polar.html#d_conj",
  "type": "Definition",
  "number": "1.2.10",
  "title": "Complex conjugation.",
  "body": " Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .   "
},
{
  "id": "fig_conj",
  "level": "2",
  "url": "s_polar.html#fig_conj",
  "type": "Figure",
  "number": "1.2.11",
  "title": "",
  "body": " Conjugation as reflection   Conjugation as reflection    "
},
{
  "id": "th_conj",
  "level": "2",
  "url": "s_polar.html#th_conj",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "Conjugation properties.",
  "body": " Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .      "
},
{
  "id": "th_polar_form",
  "level": "2",
  "url": "s_polar.html#th_polar_form",
  "type": "Theorem",
  "number": "1.2.13",
  "title": "Polar form.",
  "body": " Polar form   Let be a complex number.   We have for some nonnegative and . The choice of here is unique; in fact, we have .    If and we have for , then for some integer .      "
},
{
  "id": "d_polar",
  "level": "2",
  "url": "s_polar.html#d_polar",
  "type": "Definition",
  "number": "1.2.14",
  "title": "Polar form.",
  "body": " Polar form   Let be a complex number, and suppose and satisfy . We call the expression a polar form of and we call an argument of .  If , we define to be the unique satisfying , and we define to be the set of all arguments of . Equivalently, .   "
},
{
  "id": "eg_polar",
  "level": "2",
  "url": "s_polar.html#eg_polar",
  "type": "Example",
  "number": "1.2.15",
  "title": "Polar form.",
  "body": " Polar form   Find a polar form for the given , and compute and .                   "
},
{
  "id": "th_polar_mult",
  "level": "2",
  "url": "s_polar.html#th_polar_mult",
  "type": "Theorem",
  "number": "1.2.16",
  "title": "Polar form properties.",
  "body": " Polar form properties   Let and where .         .     .    If , then .      "
},
{
  "id": "ss_polar-7",
  "level": "2",
  "url": "s_polar.html#ss_polar-7",
  "type": "Remark",
  "number": "1.2.17",
  "title": "Geometric interpretation of complex operations.",
  "body": " Geometric interpretation of complex operations  Each of the identities of can be understood as providing a geometric interpretation of one of our complex operations.  In particular, statement (3) provides us with a more satisfying description of complex multiplication than the algebraic formula given by . Roughly speaking, the identity tells us that to multiply two complex numbers, we (a) add their arguments and (b) multiply their moduli.  Alternatively, tells us that to multiply by , we (a) rotate (considered as a point) by an angle about the origin, and (b) scale its distance from the origin by .  Similarly, tells us that the inverse of a complex number is obtained by taking the reciprocal of its modulus (the in the formula), and flipping its argument (the in the formula).  "
},
{
  "id": "eg_polar_form_",
  "level": "2",
  "url": "s_polar.html#eg_polar_form_",
  "type": "Example",
  "number": "1.2.18",
  "title": "Polar form arithmetic.",
  "body": " Polar form arithmetic   Let and . Compute the following complex numbers. Your answer should be expressed in polar form.    .     .          "
},
{
  "id": "ss_polar-9",
  "level": "2",
  "url": "s_polar.html#ss_polar-9",
  "type": "Remark",
  "number": "1.2.19",
  "title": "Multiplication by elements of <span class=\"process-math\">\\(S^1\\)<\/span>.",
  "body": " Multiplication by elements of  Recall that we can identify the unit circle as the set of all complex numbers of unit length: , . Fix . Since , has a polar expression of the form for some . It follows from our geometric description of complex multiplication that multiplication by is the same thing as rotation by about the origin. This is a surprising (and useful) connection between a geometric operation on (rotation by ), and an algebraic operation on (multiplication by ).  In more detail, we have the following complex-algebraic description of rotation by the angle :   set ;    given point , let ;    compute ;    the result of rotating by is then .   Verify for yourself that we get the same result by multiplying (considered as a column vector) by the rotation matrix  .  "
},
{
  "id": "s_deMoivre",
  "level": "1",
  "url": "s_deMoivre.html",
  "type": "Section",
  "number": "1.3",
  "title": "De Moivre’s formula",
  "body": " De Moivre's formula   The polar form description of complex multiplication given in leads naturally to a similar description of integer powers of complex numbers, called de Moivre's formula .    De Moivre's formula   De Moivre's formula   Let , where and .   Nonnegative integer powers  For all nonnegative integers , we have .    Negative integer powers  Assume . For all positive integers we have .       First observe that statement (2) follows from (1) since for and positive integer we have .  The proof of (1) is by induction on . (See .)  Base case: . We have , as desired.  Induction step: we assume the statement is true for , and show it is true for . Thus we assume that . It follows that , as desired.     De Moivre's formula   Compute . Express you answer in both polar form and in the form .         Double-angle formulas   Use de Moivre's formula to prove the double-angle formulas: .         Triple-angle formula   Use de Moivre's formula to derive triple-angle formulas for and . In more detail, find polynomials and such that . You may use the fact that the binomial theorem holds for complex numbers: , given any and positive integer , we have , where .          -th roots  One powerful application of de Moivre's formula is that it allows us to compute all -th roots of a given complex number .   -th roots   Let be a positive integer and let . An -th root of is a complex number satisfying . Equivalently, an -th root of is a complex root (or zero) of the polynomial . An -th root of unity is an -th root of .     Cube-roots of   Find all cube-roots of and sketch these as points in the complex plane. You may express your answer in polar form.       Cube-roots of   Cube-roots of         Let be a positive integer. A nonzero complex number has distinct -th roots. In more detail, writing in polar form as , the -th roots of are , where for all , we have .      Polynomials  We can view formula as providing explicit roots to the polynomial , which in turn allows us to factor into linear terms. To make proper sense of this, we introduce some terminology and elementary facts around complex polynomials.   Polynomials   A (complex) polynomial is a function of the form , where is a nonnegative integer and for all .  We call the -th term of , and the -th coefficient ; is called the constant term of .  If , then is called the leading term of , its leading coefficient , and the degree , denoted .  Lastly, a root (or zero ) of is a a complex number satsifying .     Elementary properties of polynomials      If and are polynomials, then so are , , and for any .    If is a polynomial and is a root of , then there is a polynomial such that .    If is a polynomial of degree , then has at most distinct roots.       Given a nonzero and positive integer , let be the distinct -th roots of . Since is a root of for all , it follows that we can factor into linear factors as . In particular, we now know how to completely factor any real polynomial of the form , where . The next theorem delves into factorization details of the polynomial .   Roots of unity   Fix a positive integer and let .   The distinct roots of are , where . Note that .     factors as .    We have and thus, letting , .       Take a moment to survey these results: thanks to complex numbers, we now know how to completely factor the following polynomials: . Pretty impressive! As it turns out, every complex polynomial can be factored in this manner. This is the content of the fundamental theorem of algebra , a full proof of which we will be able to provide by the end of this course.   Fundamental theorem of algebra   Let be a nonconstant polynomial: , .   Any polynomial of degree has a complex root: , there is a such that .    As a consequence, any polynomial of degree factors completely over as for some complex numbers , .        "
},
{
  "id": "th_deMoivre",
  "level": "2",
  "url": "s_deMoivre.html#th_deMoivre",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "De Moivre’s formula.",
  "body": " De Moivre's formula   Let , where and .   Nonnegative integer powers  For all nonnegative integers , we have .    Negative integer powers  Assume . For all positive integers we have .       First observe that statement (2) follows from (1) since for and positive integer we have .  The proof of (1) is by induction on . (See .)  Base case: . We have , as desired.  Induction step: we assume the statement is true for , and show it is true for . Thus we assume that . It follows that , as desired.   "
},
{
  "id": "eg_deMoivre",
  "level": "2",
  "url": "s_deMoivre.html#eg_deMoivre",
  "type": "Example",
  "number": "1.3.2",
  "title": "De Moivre’s formula.",
  "body": " De Moivre's formula   Compute . Express you answer in both polar form and in the form .       "
},
{
  "id": "eg_deMoivre_trig",
  "level": "2",
  "url": "s_deMoivre.html#eg_deMoivre_trig",
  "type": "Example",
  "number": "1.3.3",
  "title": "Double-angle formulas.",
  "body": " Double-angle formulas   Use de Moivre's formula to prove the double-angle formulas: .       "
},
{
  "id": "eg_deMoivre_triple",
  "level": "2",
  "url": "s_deMoivre.html#eg_deMoivre_triple",
  "type": "Example",
  "number": "1.3.4",
  "title": "Triple-angle formula.",
  "body": " Triple-angle formula   Use de Moivre's formula to derive triple-angle formulas for and . In more detail, find polynomials and such that . You may use the fact that the binomial theorem holds for complex numbers: , given any and positive integer , we have , where .       "
},
{
  "id": "d_nth_root",
  "level": "2",
  "url": "s_deMoivre.html#d_nth_root",
  "type": "Definition",
  "number": "1.3.5",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-th roots.",
  "body": " -th roots   Let be a positive integer and let . An -th root of is a complex number satisfying . Equivalently, an -th root of is a complex root (or zero) of the polynomial . An -th root of unity is an -th root of .   "
},
{
  "id": "eg_3d_root",
  "level": "2",
  "url": "s_deMoivre.html#eg_3d_root",
  "type": "Example",
  "number": "1.3.6",
  "title": "Cube-roots of <span class=\"process-math\">\\(8i\\)<\/span>.",
  "body": " Cube-roots of   Find all cube-roots of and sketch these as points in the complex plane. You may express your answer in polar form.       Cube-roots of   Cube-roots of      "
},
{
  "id": "th_nth_roots",
  "level": "2",
  "url": "s_deMoivre.html#th_nth_roots",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "",
  "body": "  Let be a positive integer. A nonzero complex number has distinct -th roots. In more detail, writing in polar form as , the -th roots of are , where for all , we have .   "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_deMoivre.html#d_polynomials",
  "type": "Definition",
  "number": "1.3.9",
  "title": "Polynomials.",
  "body": " Polynomials   A (complex) polynomial is a function of the form , where is a nonnegative integer and for all .  We call the -th term of , and the -th coefficient ; is called the constant term of .  If , then is called the leading term of , its leading coefficient , and the degree , denoted .  Lastly, a root (or zero ) of is a a complex number satsifying .   "
},
{
  "id": "th_poly_elem",
  "level": "2",
  "url": "s_deMoivre.html#th_poly_elem",
  "type": "Theorem",
  "number": "1.3.10",
  "title": "Elementary properties of polynomials.",
  "body": " Elementary properties of polynomials      If and are polynomials, then so are , , and for any .    If is a polynomial and is a root of , then there is a polynomial such that .    If is a polynomial of degree , then has at most distinct roots.      "
},
{
  "id": "th_roots_unity",
  "level": "2",
  "url": "s_deMoivre.html#th_roots_unity",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "Roots of unity.",
  "body": " Roots of unity   Fix a positive integer and let .   The distinct roots of are , where . Note that .     factors as .    We have and thus, letting , .      "
},
{
  "id": "th_fund_alg",
  "level": "2",
  "url": "s_deMoivre.html#th_fund_alg",
  "type": "Theorem",
  "number": "1.3.12",
  "title": "Fundamental theorem of algebra.",
  "body": " Fundamental theorem of algebra   Let be a nonconstant polynomial: , .   Any polynomial of degree has a complex root: , there is a such that .    As a consequence, any polynomial of degree factors completely over as for some complex numbers , .      "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-specimens",
  "level": "1",
  "url": "appendix-specimens.html",
  "type": "Appendix",
  "number": "D",
  "title": "Topological specimens",
  "body": " Topological specimens   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "kursobjekt-6-6",
  "level": "1",
  "url": "kursobjekt-6-6.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
