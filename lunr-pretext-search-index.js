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
  "id": "s_tuples",
  "level": "1",
  "url": "s_tuples.html",
  "type": "Section",
  "number": "0.3",
  "title": "Tuples and Cartesian products",
  "body": " Tuples and Cartesian products   We now introduce the notion of a tuple , which is a formal description of an ordered collection of objects.    tuple finite    -tuple   -tuple   Let be a set, and fix a positive integer . An -tuple (or sequence of length ) of elements of is an ordered sequence where for all .  We define two -tuples , and to be equal, denoted , if for all .  We call the length of the tuple , and for each we call its -th entry or coordinate .      We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.      Observe how tuples capture the notion of an ordered collection of objects. For example, whereas the sets and are equal to one another, the 4-tuples and are not.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.     Cartesian product finite      Cartesian product   Cartesian product (finite)   Let be subsets of a common set . The (Cartesian) product of , denoted or , is the set . In other words is the set of all -tuples of whose -th coordinate lies in for all .  Given a set , its -ary Cartesian product  is defined as .    The notion of Cartesian product can be generalized to an infinite list of sets , and indeed to any collection indexed by a set . This is accomplished by looking at tuples in a slightly different manner: namely, we can describe a tuple as an assignment to each distinct element an element that we call the coordinate of . In other words, a tuple is just a function that assigns to each in our index set  an element . This notion generalize easily by replacing the finite index set with an arbitrary set (finite or infinite).   tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .     Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .    "
},
{
  "id": "d_tuple",
  "level": "2",
  "url": "s_tuples.html#d_tuple",
  "type": "Definition",
  "number": "0.3.1",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuple.",
  "body": " tuple finite    -tuple   -tuple   Let be a set, and fix a positive integer . An -tuple (or sequence of length ) of elements of is an ordered sequence where for all .  We define two -tuples , and to be equal, denoted , if for all .  We call the length of the tuple , and for each we call its -th entry or coordinate .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_tuples.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.3.2",
  "title": "",
  "body": "  We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.   "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_tuples.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.3.3",
  "title": "",
  "body": "  Observe how tuples capture the notion of an ordered collection of objects. For example, whereas the sets and are equal to one another, the 4-tuples and are not.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.   "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_tuples.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.3.4",
  "title": "Cartesian product (finite).",
  "body": " Cartesian product finite      Cartesian product   Cartesian product (finite)   Let be subsets of a common set . The (Cartesian) product of , denoted or , is the set . In other words is the set of all -tuples of whose -th coordinate lies in for all .  Given a set , its -ary Cartesian product  is defined as .   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_tuples.html#d_Ituple",
  "type": "Definition",
  "number": "0.3.5",
  "title": "I-tuple.",
  "body": " tuple arbitrary    -tuple   I-tuple   Let be a set. Given a set , an -tuple of elements of is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .   "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_tuples.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.3.6",
  "title": "Cartesian product (arbitrary).",
  "body": " Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples of elements of whose -th coordinate is an element of for all .  In the special case where for all , we denote as .   "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.4",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.        A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:      Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )     Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.     Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .   Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .        Truth depends on domain of discourse  Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.    Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters  As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.    Negating quantifiers  Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.4.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.4.2",
  "title": "",
  "body": " A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:   "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.4.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.4.4",
  "title": "",
  "body": " Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.  "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.4.5",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .   Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .      "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.4.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse  Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.  "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.4.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.4.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters  As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.  "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.4.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers  Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.   "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.4.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below (see ). We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.5",
  "title": "Proof techniques",
  "body": " Proof techniques   Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.    Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)   The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )     Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).   It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.    is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .    Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .     Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.      Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities  Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .   Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  According to , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      Mathematical induction  mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    Proof by induction  mathematical induction weak induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.    Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!   Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions         Proof by strong induction  mathematical induction strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.5.1",
  "title": "",
  "body": " The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )  "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.5.2",
  "title": "",
  "body": " It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.  "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.5.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.    is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .    Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.5.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.5.5",
  "title": "",
  "body": " Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.  "
},
{
  "id": "sss_chain_equalities-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-3",
  "type": "Warning",
  "number": "0.5.6",
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
  "number": "0.5.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.  "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.5.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.5.9",
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
  "number": "0.5.10",
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
  "body": " De Moivre's formula   The polar form description of complex multiplication given in leads naturally to a similar description of integer powers of complex numbers, called de Moivre's formula .    De Moivre's formula   De Moivre's formula   Let , where and .   Nonnegative integer powers  For all nonnegative integers , we have .    Negative integer powers  Assume . For all positive integers we have .       First observe that statement (2) follows from (1) since for and positive integer we have .  The proof of (1) is by induction on . (See .)  Base case: . We have , as desired.  Induction step: we assume the statement is true for , and show it is true for . Thus we assume that . It follows that , as desired.     De Moivre's formula   Compute . Express you answer in both polar form and in the form .    First write in polar form as . Using de Moivre's formula, we have      Double-angle formulas   Use de Moivre's formula to prove the double-angle formulas: .    Let . We may compute using the algebraic definition of complex multiplication, or by using de Moivre's formula. Equating the two resulting expressions yields . From the definition of complex number equality, it follows that , as desired.     Triple-angle formula   Use de Moivre's formula to derive triple-angle formulas for and . In more detail, find polynomials and such that . You may use the fact that the binomial theorem holds for complex numbers: , given any and positive integer , we have , where .    Let as an exercise.      -th roots  One powerful application of de Moivre's formula is that it allows us to compute all -th roots of a given complex number .   -th roots   Let be a positive integer and let . An -th root of is a complex number satisfying . Equivalently, an -th root of is a complex root (or zero) of the polynomial . An -th root of unity is an -th root of .     Cube-roots of   Find all cube-roots of and sketch these as points in the complex plane. You may express your answer in polar form.    First write in polar form as . If satisfies , then using de Moivre's theorem we would have . Using we conclude that we must have , or equivalently, . Taking , we see that are cube-roots of . We claim further that these are all of the cube-roots of . This follows from the fact that any angle of the form is obtained from one of the three angles by adding a multiple of .   Cube-roots of   Cube-roots of       The reasoning in can easily be generalized to produce a procedure for computing -th roots of an arbitrary complex number.   -th roots   Let be a positive integer. A nonzero complex number has distinct -th roots. In more detail, writing in polar form as , the -th roots of are , where for all , we have .    We seek ( , ) satisfying . By de Moivre's formula, this is equivalent to . By , this is true if and only if . Solving for and we conclude that . It follows that the complex numbers are -th roots of . That they are distinct follows again from and the fact that for all . Lastly, since the polynomial has at most  distinct roots (see ), the roots are the only -th roots of .     Visualizing -th roots  Let be the distinct -th roots of the nonzero complex number , as described in . We make some geometric observations about the :   Each has modulus , and thus lives on the circle of radius centered at the origin.    Looking at the arguments of the , we see that for each , is obtained from by a rotation of about the origin. It follows that starting with , we can obtain the other roots by successive rotation by .    From the previous observations, it follows that the distinct -th roots of are the vertices of a regular -gon inscribed in the circle of radius centered at the origin. (See .)        Polynomials  We can view formula as providing explicit roots to the polynomial , which in turn allows us to factor into linear terms. To make proper sense of this, we introduce some terminology and elementary facts around complex polynomials.   Polynomials   A (complex) polynomial is a function of the form , where is a nonnegative integer and for all .  We call the -th term of , and the -th coefficient ; is called the constant term of .  If , then is called the leading term of , its leading coefficient , and the degree , denoted .  Lastly, a root (or zero ) of is a a complex number satisfying .     Elementary properties of polynomials      If and are polynomials, then so are , , and for any .    If is a polynomial and is a root of , then there is a polynomial such that .    If is a polynomial of degree , then has at most distinct roots.       Given a nonzero and positive integer , let be the distinct -th roots of . Since is a root of for all , it follows that we can factor into linear factors as . In particular, we now know how to completely factor any real polynomial of the form , where . The next theorem delves into factorization details of the polynomial .   Roots of unity   Fix a positive integer and let .   The distinct roots of are , where . Note that .     factors as .    We have and thus, letting , .        Factoring    Give two distinct factorizations of :   as a product of irreducible real polynomials;    as a product of linear terms with complex coefficients.          Using the difference of squares factoring identity, we have . Next, since is a root of , and is a root of , we can use polynomial division to factor . It is now easy to see, using the quadratic formula, that and are irreducible over , since they have no real roots. Thus is a factorization of into irreducible real polynomials.    Using , we have , where .       Take a moment to survey these results: thanks to complex numbers, we now know how to completely factor the following polynomials: . Pretty impressive! As it turns out, every complex polynomial can be factored in this manner. This is the content of the fundamental theorem of algebra , a full proof of which we will be able to provide by the end of this course.   Fundamental theorem of algebra   Let be a nonconstant polynomial: , .   Any polynomial of degree has a complex root: , there is a such that .    As a consequence, any polynomial of degree factors completely over as for some complex numbers , .        "
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
  "body": " De Moivre's formula   Compute . Express you answer in both polar form and in the form .    First write in polar form as . Using de Moivre's formula, we have    "
},
{
  "id": "eg_deMoivre_trig",
  "level": "2",
  "url": "s_deMoivre.html#eg_deMoivre_trig",
  "type": "Example",
  "number": "1.3.3",
  "title": "Double-angle formulas.",
  "body": " Double-angle formulas   Use de Moivre's formula to prove the double-angle formulas: .    Let . We may compute using the algebraic definition of complex multiplication, or by using de Moivre's formula. Equating the two resulting expressions yields . From the definition of complex number equality, it follows that , as desired.   "
},
{
  "id": "eg_deMoivre_triple",
  "level": "2",
  "url": "s_deMoivre.html#eg_deMoivre_triple",
  "type": "Example",
  "number": "1.3.4",
  "title": "Triple-angle formula.",
  "body": " Triple-angle formula   Use de Moivre's formula to derive triple-angle formulas for and . In more detail, find polynomials and such that . You may use the fact that the binomial theorem holds for complex numbers: , given any and positive integer , we have , where .    Let as an exercise.   "
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
  "body": " Cube-roots of   Find all cube-roots of and sketch these as points in the complex plane. You may express your answer in polar form.    First write in polar form as . If satisfies , then using de Moivre's theorem we would have . Using we conclude that we must have , or equivalently, . Taking , we see that are cube-roots of . We claim further that these are all of the cube-roots of . This follows from the fact that any angle of the form is obtained from one of the three angles by adding a multiple of .   Cube-roots of   Cube-roots of      "
},
{
  "id": "th_nth_roots",
  "level": "2",
  "url": "s_deMoivre.html#th_nth_roots",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-th roots.",
  "body": " -th roots   Let be a positive integer. A nonzero complex number has distinct -th roots. In more detail, writing in polar form as , the -th roots of are , where for all , we have .    We seek ( , ) satisfying . By de Moivre's formula, this is equivalent to . By , this is true if and only if . Solving for and we conclude that . It follows that the complex numbers are -th roots of . That they are distinct follows again from and the fact that for all . Lastly, since the polynomial has at most  distinct roots (see ), the roots are the only -th roots of .   "
},
{
  "id": "ss_nth_roots-7",
  "level": "2",
  "url": "s_deMoivre.html#ss_nth_roots-7",
  "type": "Remark",
  "number": "1.3.9",
  "title": "Visualizing <span class=\"process-math\">\\(n\\)<\/span>-th roots.",
  "body": " Visualizing -th roots  Let be the distinct -th roots of the nonzero complex number , as described in . We make some geometric observations about the :   Each has modulus , and thus lives on the circle of radius centered at the origin.    Looking at the arguments of the , we see that for each , is obtained from by a rotation of about the origin. It follows that starting with , we can obtain the other roots by successive rotation by .    From the previous observations, it follows that the distinct -th roots of are the vertices of a regular -gon inscribed in the circle of radius centered at the origin. (See .)     "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_deMoivre.html#d_polynomials",
  "type": "Definition",
  "number": "1.3.10",
  "title": "Polynomials.",
  "body": " Polynomials   A (complex) polynomial is a function of the form , where is a nonnegative integer and for all .  We call the -th term of , and the -th coefficient ; is called the constant term of .  If , then is called the leading term of , its leading coefficient , and the degree , denoted .  Lastly, a root (or zero ) of is a a complex number satisfying .   "
},
{
  "id": "th_poly_elem",
  "level": "2",
  "url": "s_deMoivre.html#th_poly_elem",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "Elementary properties of polynomials.",
  "body": " Elementary properties of polynomials      If and are polynomials, then so are , , and for any .    If is a polynomial and is a root of , then there is a polynomial such that .    If is a polynomial of degree , then has at most distinct roots.      "
},
{
  "id": "th_roots_unity",
  "level": "2",
  "url": "s_deMoivre.html#th_roots_unity",
  "type": "Theorem",
  "number": "1.3.12",
  "title": "Roots of unity.",
  "body": " Roots of unity   Fix a positive integer and let .   The distinct roots of are , where . Note that .     factors as .    We have and thus, letting , .      "
},
{
  "id": "eg_factor_sextic",
  "level": "2",
  "url": "s_deMoivre.html#eg_factor_sextic",
  "type": "Example",
  "number": "1.3.13",
  "title": "Factoring <span class=\"process-math\">\\(f(x)=x^6-1\\)<\/span>.",
  "body": " Factoring    Give two distinct factorizations of :   as a product of irreducible real polynomials;    as a product of linear terms with complex coefficients.          Using the difference of squares factoring identity, we have . Next, since is a root of , and is a root of , we can use polynomial division to factor . It is now easy to see, using the quadratic formula, that and are irreducible over , since they have no real roots. Thus is a factorization of into irreducible real polynomials.    Using , we have , where .      "
},
{
  "id": "th_fund_alg",
  "level": "2",
  "url": "s_deMoivre.html#th_fund_alg",
  "type": "Theorem",
  "number": "1.3.14",
  "title": "Fundamental theorem of algebra.",
  "body": " Fundamental theorem of algebra   Let be a nonconstant polynomial: , .   Any polynomial of degree has a complex root: , there is a such that .    As a consequence, any polynomial of degree factors completely over as for some complex numbers , .      "
},
{
  "id": "s_topo",
  "level": "1",
  "url": "s_topo.html",
  "type": "Section",
  "number": "1.4",
  "title": "Topology of <span class=\"process-math\">\\(\\C\\)<\/span>",
  "body": " Topology of   Recall that the modulus of the difference of two complex numbers and is precisely the distance between and , considered as points in . As a result of , this distance function satisfies the following important properties:   Positivity   for all , and if and only if ;    Triangle inequality   for all .   A set together with a binary function satisfying properties (i)-(ii) is called a metric space . We can use the distance function of a metric space to define what turns out to be a useful and natural family of subsets, called the open sets . We illustrate this definition below in the special case of and . More generally, a topological space is a set together with a set of subsets of that satisfy certain axioms. It is easy to show that the collection of sets we define for below satisfies these axioms, making together with     Open and closed sets   Open and closed discs   Given , the distance between and , denoted , is defined as .  Given and the open disc of radius centered at , denoted , is defined as . Similarly, the closed disc of radius centered at , denoted , is defined as .     Open and closed discs    Open disc   Open disc      Closed disc   Closed disc        Open sets of   A set is open if for all there is an such that . In plain English, a set is open if whenever it contains an element , it contains an entire open disc centered at .     Open sets   Show that the following sets are open in .    where and .                    Suppose , and let . By definition we have and hence . We claim that , and hence that is open. Indeed, given any , we have . We conclude that and hence that , as desired.    Take and write . We have by definition, and it is easy to see that .    Given , let , and let . It is easy to see that .       The set in is an example of an open annulus. These types of sets are important enough to warrant their own definition.   Annulus   Given and positive integers , the set is called an open annulus centered at .       An open annulus     The following theorem indicates that the property of openness is preserved by various natural set operations.   Open sets      The empty set is open, as is the set itself.    Finite intersection  Finite intersections of open sets are open.    Arbitrary union  Arbitrary unions of open sets are open.       Complementary to the notion of open sets is that of closed sets, which we now define.   Closed sets   A set is closed if its complement is open.     Open, closed, neither   Decide whether the given set is (a) open and (b) closed.         , where and .     , where and .               We know from that is open. Since is open, we conclude that is also closed.    The set is not open: if you take any on the circle of radius centered at , it is easy to see that any open disc around will contain an element whose distance to is greater than .  The set is closed. We have , and it is not difficult to show that this set is open. Indeed, given , you can show that , where .    The set is neither open nor closed. It is easy to see that is an element of , but not open disc centered at is contained in . Furthermore, the complement of , is not open. Indeed, we have , but every open disc around contains some element of .       Since closed sets are defined as complement of open sets, a little bit of set theory yields the following complementary result to .       The empty set is closed, as is the set itself.    Finite union  Finite unions of closed sets are closed.    Arbitrary intersection  Arbitrary intersections of closed sets are closed.       You may have noticed in that we paid special attention to what we call the boundaries of the given sets. We will now give a rigorous definition of this notion, and then reformulate open and closed in terms of it.   Boundary   Let be a subset of . An element is a boundary point of if every open disc contains at least one element from and one element from the complement . The boundary of , denoted , is the set of all boundary points of .     Boundary   Compute the boundary of the given set.              , where and .     , where and .               We have since for all no open ball can contain elements of . Indeed, contains no elements!    We have . Indeed, given any , we have for all , and hence this ball contains nothing but elements of .    Let , the circle of radius centered at . We have . It is clear that every point on is a boundary point of . It is also easy to see that any not lying on is not a boundary point of .    Similar reasoning as above shows that .    It is easy to see that , the -axis.        Open and closed via boundaries   Let be a nonempty subset of .    is open if and only if it does not contain any of its boundary points.     is closed if and only if it contains all of its boundary points.         Connected sets  The topological notion of a connected set will also play an important role in our theory. Below we give two separate notions of connected sets, connected and polygonally connected , that turn out to be equivalent for open sets. Both notions have their advantages, depending on the context. Although polygonally connectedness is admittedly more intuitive than connectedness, you can rest assured that there are many situations where the more abstract connectedness definition comes to our aid. This is why we provide both here.   Connected set   A set is connected if whenever we have open sets and satisfying and , then either or .     Polygonally connected   A nonempty set is polygonally connected if, given any points there is a polygonal path lying within that begins at and ends at .     A polygonally connected set   A polygonally connected set      Connected sets   Let be a nonempty set.   If is polygonally connected, then it is connected.    If is open, then is polygonally connected if and only if is connected.         Point at infinity  In calculus we introduce formal notation involving to give us succinct ways of describe values of variables or functions that get arbitrarily large: of . We will do the same with complex analysis, and even go one step further: namely, by officially adding a formal element to create the extended complex plane , and extending our notion of open sets to this extended set .   Extended complex plane   The extended complex plane is the set , where is treated as a formal element.  Given , the set defined as is called an open disc centered at . We extend our notion of open sets on to by declaring that a set containing is open if and only if is open in and contains for some .    We can make sense of our new topological space using the stereographic projection .   Stereographic projection   Let , and let . Identify as the -plane lying in . The stereographic projection is the map defined as follows:    ;    given , , where is the intersection of the unique line passing through and with the -plane.        "
},
{
  "id": "d_discs",
  "level": "2",
  "url": "s_topo.html#d_discs",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Open and closed discs.",
  "body": " Open and closed discs   Given , the distance between and , denoted , is defined as .  Given and the open disc of radius centered at , denoted , is defined as . Similarly, the closed disc of radius centered at , denoted , is defined as .   "
},
{
  "id": "fig_disc",
  "level": "2",
  "url": "s_topo.html#fig_disc",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " Open and closed discs    Open disc   Open disc      Closed disc   Closed disc      "
},
{
  "id": "d_open",
  "level": "2",
  "url": "s_topo.html#d_open",
  "type": "Definition",
  "number": "1.4.3",
  "title": "Open sets of <span class=\"process-math\">\\(\\C\\)<\/span>.",
  "body": " Open sets of   A set is open if for all there is an such that . In plain English, a set is open if whenever it contains an element , it contains an entire open disc centered at .   "
},
{
  "id": "eg_open",
  "level": "2",
  "url": "s_topo.html#eg_open",
  "type": "Example",
  "number": "1.4.4",
  "title": "Open sets.",
  "body": " Open sets   Show that the following sets are open in .    where and .                    Suppose , and let . By definition we have and hence . We claim that , and hence that is open. Indeed, given any , we have . We conclude that and hence that , as desired.    Take and write . We have by definition, and it is easy to see that .    Given , let , and let . It is easy to see that .      "
},
{
  "id": "d_annulus",
  "level": "2",
  "url": "s_topo.html#d_annulus",
  "type": "Definition",
  "number": "1.4.5",
  "title": "Annulus.",
  "body": " Annulus   Given and positive integers , the set is called an open annulus centered at .   "
},
{
  "id": "fig_annulus",
  "level": "2",
  "url": "s_topo.html#fig_annulus",
  "type": "Figure",
  "number": "1.4.6",
  "title": "",
  "body": "   An open annulus    "
},
{
  "id": "th_open",
  "level": "2",
  "url": "s_topo.html#th_open",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "Open sets.",
  "body": " Open sets      The empty set is open, as is the set itself.    Finite intersection  Finite intersections of open sets are open.    Arbitrary union  Arbitrary unions of open sets are open.      "
},
{
  "id": "d_closed",
  "level": "2",
  "url": "s_topo.html#d_closed",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Closed sets.",
  "body": " Closed sets   A set is closed if its complement is open.   "
},
{
  "id": "eg_open_closed_neither",
  "level": "2",
  "url": "s_topo.html#eg_open_closed_neither",
  "type": "Example",
  "number": "1.4.9",
  "title": "Open, closed, neither.",
  "body": " Open, closed, neither   Decide whether the given set is (a) open and (b) closed.         , where and .     , where and .               We know from that is open. Since is open, we conclude that is also closed.    The set is not open: if you take any on the circle of radius centered at , it is easy to see that any open disc around will contain an element whose distance to is greater than .  The set is closed. We have , and it is not difficult to show that this set is open. Indeed, given , you can show that , where .    The set is neither open nor closed. It is easy to see that is an element of , but not open disc centered at is contained in . Furthermore, the complement of , is not open. Indeed, we have , but every open disc around contains some element of .      "
},
{
  "id": "th_closed",
  "level": "2",
  "url": "s_topo.html#th_closed",
  "type": "Theorem",
  "number": "1.4.10",
  "title": "",
  "body": "     The empty set is closed, as is the set itself.    Finite union  Finite unions of closed sets are closed.    Arbitrary intersection  Arbitrary intersections of closed sets are closed.      "
},
{
  "id": "d_boundary",
  "level": "2",
  "url": "s_topo.html#d_boundary",
  "type": "Definition",
  "number": "1.4.11",
  "title": "Boundary.",
  "body": " Boundary   Let be a subset of . An element is a boundary point of if every open disc contains at least one element from and one element from the complement . The boundary of , denoted , is the set of all boundary points of .   "
},
{
  "id": "eg_boundary",
  "level": "2",
  "url": "s_topo.html#eg_boundary",
  "type": "Example",
  "number": "1.4.12",
  "title": "Boundary.",
  "body": " Boundary   Compute the boundary of the given set.              , where and .     , where and .               We have since for all no open ball can contain elements of . Indeed, contains no elements!    We have . Indeed, given any , we have for all , and hence this ball contains nothing but elements of .    Let , the circle of radius centered at . We have . It is clear that every point on is a boundary point of . It is also easy to see that any not lying on is not a boundary point of .    Similar reasoning as above shows that .    It is easy to see that , the -axis.      "
},
{
  "id": "th_boundary",
  "level": "2",
  "url": "s_topo.html#th_boundary",
  "type": "Theorem",
  "number": "1.4.13",
  "title": "Open and closed via boundaries.",
  "body": " Open and closed via boundaries   Let be a nonempty subset of .    is open if and only if it does not contain any of its boundary points.     is closed if and only if it contains all of its boundary points.      "
},
{
  "id": "d_connected",
  "level": "2",
  "url": "s_topo.html#d_connected",
  "type": "Definition",
  "number": "1.4.14",
  "title": "Connected set.",
  "body": " Connected set   A set is connected if whenever we have open sets and satisfying and , then either or .   "
},
{
  "id": "d_polygon_connected",
  "level": "2",
  "url": "s_topo.html#d_polygon_connected",
  "type": "Definition",
  "number": "1.4.15",
  "title": "Polygonally connected.",
  "body": " Polygonally connected   A nonempty set is polygonally connected if, given any points there is a polygonal path lying within that begins at and ends at .   "
},
{
  "id": "fig_polygon_connected",
  "level": "2",
  "url": "s_topo.html#fig_polygon_connected",
  "type": "Figure",
  "number": "1.4.16",
  "title": "",
  "body": " A polygonally connected set   A polygonally connected set    "
},
{
  "id": "th_connected",
  "level": "2",
  "url": "s_topo.html#th_connected",
  "type": "Theorem",
  "number": "1.4.17",
  "title": "Connected sets.",
  "body": " Connected sets   Let be a nonempty set.   If is polygonally connected, then it is connected.    If is open, then is polygonally connected if and only if is connected.      "
},
{
  "id": "d_extended_complex_plane",
  "level": "2",
  "url": "s_topo.html#d_extended_complex_plane",
  "type": "Definition",
  "number": "1.4.18",
  "title": "Extended complex plane.",
  "body": " Extended complex plane   The extended complex plane is the set , where is treated as a formal element.  Given , the set defined as is called an open disc centered at . We extend our notion of open sets on to by declaring that a set containing is open if and only if is open in and contains for some .   "
},
{
  "id": "d_stereo_proj",
  "level": "2",
  "url": "s_topo.html#d_stereo_proj",
  "type": "Definition",
  "number": "1.4.19",
  "title": "Stereographic projection.",
  "body": " Stereographic projection   Let , and let . Identify as the -plane lying in . The stereographic projection is the map defined as follows:    ;    given , , where is the intersection of the unique line passing through and with the -plane.      "
},
{
  "id": "s_sequences",
  "level": "1",
  "url": "s_sequences.html",
  "type": "Section",
  "number": "1.5",
  "title": "Sequences and series",
  "body": " Sequences and series   The complex modulus function , as well as the distance function it defines, gives rise to theory of convergence of complex sequences and series that is a straightforward generalization of real sequences and series theory.    Sequences   Limit of sequence   A sequence of complex numbers of complex numbers converges if there is a complex number satisfying the following property: for all , there exists a such that if , then . We write (or ) in this case, and call the limit of the sequence.  A sequence diverges if it does not converge.     Infinite limit   A complex sequence has an infinite limit , denoted if for all , there exists an such that if , then .     Infinite limit  Identifying an element of with its corresponding point using the stereographic projection, you can show that .    Logical shorthand   , can be expressed using logical shorthand as follows: .   Limits of complex sequences satisfy all the usual familiar limit properties of real sequences, and then some.   Limit properties   Let and be sequences of complex numbers.    if and only if .  In particular, if and only if .     converges if and only if and both converge, in which case . In particular, we have if and only if .     if and only if .    If , then .    If and , then .     if and only if , assuming for all .       Most of these statements are proved exactly as with their analogous statements for real sequences, and both in turn use little beyond properties of , either as the absolute value (on the reals) or its extension, the complex modulus. We content ourselves with proving (2) by way of illustration.  For the reverse direction ( ), if both and exist, then we have , as desired.  Consider now the forward implication ( ). We assume and wish to show that and (which also proves these limits exists). We will give a proof of the second equality: you can prove the first in much the same way. Fix any positive . Since , we can find an such that for all . But then we have for all , showing that , as desired.     Limit of sequence   Define . Show that converges and compute its limit.    We have , where . It follows from de Moivre's formula that and hence that Since , we have . It follows from that .     Divergent sequence   Show that the sequence diverges.    Observe first that the sequence is periodic of the form \\[ i,-1,-i,1,i,-1,\\dots \\] Assume by contradiction that for some complex number . Taking in the definition of sequence convergence, this would imply the existence of an such that for all . In particular, we would have and . But this would imply that , a contradiction since then we'd have . We conclude that there is no limit to the sequence.     Sequence with infinite limit   Show that .    Let . We will show that , and thus , by . Looking at we see that the dominating term on top is the and the dominating term on the bottom is . We will make this argument rigorous by factoring out these dominating terms from the top and bottom and computing the limit using a combination of algebra and limit rules. . Since , we conclude that .      Series  As with the reals, from a theory of convergent sequences we easily derive a theory of convergent series . The definitions and results below are all straightforward generalizations of facts about series of real numbers.   Series   Given a complex sequence , the formal expression is called a (complex) series .  For each we define the -th partial sum  of the series as . We say the series converges if for some complex number , in which case we write and say that the series converges to .  A series diverges if it does not converge.     Series properties   Let and be complex sequences.    if and only if , where is the -th partial sum of .     converges if and only if and converge, in which case . In particular, if and only if     If and , then , for any .    Divergence test  If converges, then .    Absolute convergence test  If converges, then converges and .            Geometric series   Let . Show that the geometric series  converges to if , and diverges for .    First observe that if , then the sequence . It follows that and thus that the series diverges by the divergence test.  Now assume . For all the -th partia sum is using the polynomial identity . It follows that .     "
},
{
  "id": "d_lim_seq",
  "level": "2",
  "url": "s_sequences.html#d_lim_seq",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Limit of sequence.",
  "body": " Limit of sequence   A sequence of complex numbers of complex numbers converges if there is a complex number satisfying the following property: for all , there exists a such that if , then . We write (or ) in this case, and call the limit of the sequence.  A sequence diverges if it does not converge.   "
},
{
  "id": "d_lim_seq_inf",
  "level": "2",
  "url": "s_sequences.html#d_lim_seq_inf",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Infinite limit.",
  "body": " Infinite limit   A complex sequence has an infinite limit , denoted if for all , there exists an such that if , then .   "
},
{
  "id": "ss_sequences-4",
  "level": "2",
  "url": "s_sequences.html#ss_sequences-4",
  "type": "Remark",
  "number": "1.5.3",
  "title": "Infinite limit.",
  "body": " Infinite limit  Identifying an element of with its corresponding point using the stereographic projection, you can show that .  "
},
{
  "id": "ss_sequences-5",
  "level": "2",
  "url": "s_sequences.html#ss_sequences-5",
  "type": "Remark",
  "number": "1.5.4",
  "title": "Logical shorthand.",
  "body": " Logical shorthand   , can be expressed using logical shorthand as follows: .  "
},
{
  "id": "th_lim",
  "level": "2",
  "url": "s_sequences.html#th_lim",
  "type": "Theorem",
  "number": "1.5.5",
  "title": "Limit properties.",
  "body": " Limit properties   Let and be sequences of complex numbers.    if and only if .  In particular, if and only if .     converges if and only if and both converge, in which case . In particular, we have if and only if .     if and only if .    If , then .    If and , then .     if and only if , assuming for all .       Most of these statements are proved exactly as with their analogous statements for real sequences, and both in turn use little beyond properties of , either as the absolute value (on the reals) or its extension, the complex modulus. We content ourselves with proving (2) by way of illustration.  For the reverse direction ( ), if both and exist, then we have , as desired.  Consider now the forward implication ( ). We assume and wish to show that and (which also proves these limits exists). We will give a proof of the second equality: you can prove the first in much the same way. Fix any positive . Since , we can find an such that for all . But then we have for all , showing that , as desired.   "
},
{
  "id": "eg_lim_seq",
  "level": "2",
  "url": "s_sequences.html#eg_lim_seq",
  "type": "Example",
  "number": "1.5.6",
  "title": "Limit of sequence.",
  "body": " Limit of sequence   Define . Show that converges and compute its limit.    We have , where . It follows from de Moivre's formula that and hence that Since , we have . It follows from that .   "
},
{
  "id": "eg_lim_seq_div",
  "level": "2",
  "url": "s_sequences.html#eg_lim_seq_div",
  "type": "Example",
  "number": "1.5.7",
  "title": "Divergent sequence.",
  "body": " Divergent sequence   Show that the sequence diverges.    Observe first that the sequence is periodic of the form \\[ i,-1,-i,1,i,-1,\\dots \\] Assume by contradiction that for some complex number . Taking in the definition of sequence convergence, this would imply the existence of an such that for all . In particular, we would have and . But this would imply that , a contradiction since then we'd have . We conclude that there is no limit to the sequence.   "
},
{
  "id": "eg_lim_seq_inf",
  "level": "2",
  "url": "s_sequences.html#eg_lim_seq_inf",
  "type": "Example",
  "number": "1.5.8",
  "title": "Sequence with infinite limit.",
  "body": " Sequence with infinite limit   Show that .    Let . We will show that , and thus , by . Looking at we see that the dominating term on top is the and the dominating term on the bottom is . We will make this argument rigorous by factoring out these dominating terms from the top and bottom and computing the limit using a combination of algebra and limit rules. . Since , we conclude that .   "
},
{
  "id": "d_series",
  "level": "2",
  "url": "s_sequences.html#d_series",
  "type": "Definition",
  "number": "1.5.9",
  "title": "Series.",
  "body": " Series   Given a complex sequence , the formal expression is called a (complex) series .  For each we define the -th partial sum  of the series as . We say the series converges if for some complex number , in which case we write and say that the series converges to .  A series diverges if it does not converge.   "
},
{
  "id": "th_series",
  "level": "2",
  "url": "s_sequences.html#th_series",
  "type": "Theorem",
  "number": "1.5.10",
  "title": "Series properties.",
  "body": " Series properties   Let and be complex sequences.    if and only if , where is the -th partial sum of .     converges if and only if and converge, in which case . In particular, if and only if     If and , then , for any .    Divergence test  If converges, then .    Absolute convergence test  If converges, then converges and .          "
},
{
  "id": "eg_geom_series",
  "level": "2",
  "url": "s_sequences.html#eg_geom_series",
  "type": "Example",
  "number": "1.5.11",
  "title": "Geometric series.",
  "body": " Geometric series   Let . Show that the geometric series  converges to if , and diverges for .    First observe that if , then the sequence . It follows that and thus that the series diverges by the divergence test.  Now assume . For all the -th partia sum is using the polynomial identity . It follows that .   "
},
{
  "id": "s_complex_functions",
  "level": "1",
  "url": "s_complex_functions.html",
  "type": "Section",
  "number": "1.6",
  "title": "Complex functions",
  "body": " Complex functions   We now introduce the main object of study in this course, complex functions , and begin developing what ends up being an extension of calculus to this setting, starting with the notion of a limit of a complex function.    Complex functions   Complex function   A complex function is a function , where .     Real and imaginary parts   Given a complex function with , we can write , where and . We call the functions and the the real and imaginary parts of , respectively, and write .  Identifying complex numbers with pairs in in the usual manner, we can think of as real-valued functions in the real variables and .     Real and imaginary parts  Given a complex function , if we write without further comment, it is assumed that and are the real and imaginary parts of .    Real and imaginary parts  Given a complex function , its real and imaginary parts are real-valued functions with domain .    Real and imaginary parts   Let be defined as .   Find the real and imaginary parts of .    Decide whether is injective.    Compute .          Letting , we have , and thus .    Since for all , we see that is not injective: as a concrete counterexample, .    According to , every complex number has a square-root. Thus for all there is a such that . This proves is surjective.        Complex exponential function   We define the (complex) exponential function  as . We will also us the notation to denote .     Euler's formula  At long last we have a convenient shorthand notation for complex elements of the form : namely, we see that . This equality is called Euler's formula . A particularly famous consequence of Euler's formula is given by Euler's equation : .    Exponential function properties      We have for all .    We have if and only if and for some . In particular, is not injective.     .          Given complex numbers and , we have .    We have , where the last equivalence follows from the fact that the real exponential function is injective.    Given any we can write in polar form as for some and . Letting , we have . This shows that for all there is a such that . Thus . It is clear that , and hence that .        Solving  From our analysis in the proof of , we saw that given a nonzero , the complex number , satisfies . It follows from (2) of that the set of all satisfying is thus . As such, as a sort of shorthand, we can express this set as , where as always is the set of all arguments of . Note that the various algebraic operations in that expression must be appropriately interpreted as an operations on sets.     Visualizing complex functions  How do we visualize a complex function ? Identifying with , we can think of as a function . As with any function, the graph  of is defined as the set of all input-output pairs . Identifying with the pair and with we have . This is not such an easy object to visualize, being a subset of . Instead, thinking of as a transformation of the complex plane, we can visualize how transforms various useful subsets of . This is typically done by starting with two copies of the complex plane (often called the - and -planes), sketching curves or regions in the -plane, and sketching their image in the -plane.   Squaring transformation   Define as . Sketch the given curves or regions in the complex -plane, as well as the image of these sets under in the complex -plane.    , .          , , .     ,      , .     , ,        We have , where and . Both descriptions will come in handy below.   Looking at the polar description of , we see that takes a point on , rotates it by and scales it by . It is clear then that .    From the polar description of , we see that , from whence it follows that for some . It is easy to see that if and only if for some . Thus maps to .    From the two previous parts, we conclude that maps to . See .    Given , we have . When , we see easily that this lies in , and that .  Assume . Setting and , we see (after a little algebra) that . This equation defines a horizontal parabola extending to the left in the -plane, with vertex , and it is easy to see that the image of under is this entire parabola.    A similar analysis as above shows that if , and the rightward opening horizontal parabola defined by .    Lastly, from the previous two parts it now follows that is the region bounded by the parabolas , , and . See .       Our analysis in gives us a complete understanding of how transforms two different coordinate systems of the plane: the cartesian coordinate system (represented by the standard rectangular grid), and the polar coordinate system (represented by the polar grid).   summarizes the action of on the standard rectangular grid: it maps the - and -axes to the negative and positive -axes, respectively, and it maps all other horizontal and vertical lines to horizontal parabolas.   Image of standard grid under    Standard grid   Standard xy-grid      Image of standard grid under   Image of standard xy-grid       The action of on the polar grid is somewhat simpler to describe: it maps the circles of radius centered at the origin to the circle obtained by squaring the radius; and it maps the ray that makes an oriented angle of with the -axis, to the ray obtained by doubling this angle.   Image of polar rectangle under    Polar grid portion   Polar grid      Image of polar grid portion under   Image of polar grid        Exponential transformation   Define as . Sketch the given curves or regions in the complex -plane, as well as the image of these sets under in the complex -plane.    ,      , .     , ,        Writing we see that . From the first description we see that for fixed the set is the set of all complex numbers with modulus : , , the circle of radius centered at the origin.  From the second description we see that for fixed the set is the set of all positive scalar multiples of . (Positive since is positive for all .) This is precisely the ray of all complex numbers satisfying for some .  It follows that maps a rectangular region of the form to the polar rectangular region  . See .    Our analysis in can be summarized as follows: the exponential function maps the vertical lines to the circles of radius centered at the origin; and it maps the horizontal lines to the rays starting at the origin that make an angle of radians with the positive -axis. It follows that a rectangular region of the form gets mapped to the polar rectangular region  .   Image of standard grid under    Standard grid   Standard grid of plane      Image of standard grid under   Image of standard grid under f       Lastly from and our anaylis above, it follows that if we restrict to the infinite horizontal strip , then defines a bijective function .   defines a bijection from to      Infinite horizontal strip      The image of under   Image of the strip under the exponential       "
},
{
  "id": "d_complex_function",
  "level": "2",
  "url": "s_complex_functions.html#d_complex_function",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Complex function.",
  "body": " Complex function   A complex function is a function , where .   "
},
{
  "id": "d_real_imag_parts",
  "level": "2",
  "url": "s_complex_functions.html#d_real_imag_parts",
  "type": "Definition",
  "number": "1.6.2",
  "title": "Real and imaginary parts.",
  "body": " Real and imaginary parts   Given a complex function with , we can write , where and . We call the functions and the the real and imaginary parts of , respectively, and write .  Identifying complex numbers with pairs in in the usual manner, we can think of as real-valued functions in the real variables and .   "
},
{
  "id": "ss_functions-4",
  "level": "2",
  "url": "s_complex_functions.html#ss_functions-4",
  "type": "Convention",
  "number": "1.6.3",
  "title": "Real and imaginary parts.",
  "body": " Real and imaginary parts  Given a complex function , if we write without further comment, it is assumed that and are the real and imaginary parts of .  "
},
{
  "id": "ss_functions-5",
  "level": "2",
  "url": "s_complex_functions.html#ss_functions-5",
  "type": "Remark",
  "number": "1.6.4",
  "title": "Real and imaginary parts.",
  "body": " Real and imaginary parts  Given a complex function , its real and imaginary parts are real-valued functions with domain .  "
},
{
  "id": "eg_real_imag_parts",
  "level": "2",
  "url": "s_complex_functions.html#eg_real_imag_parts",
  "type": "Example",
  "number": "1.6.5",
  "title": "Real and imaginary parts.",
  "body": " Real and imaginary parts   Let be defined as .   Find the real and imaginary parts of .    Decide whether is injective.    Compute .          Letting , we have , and thus .    Since for all , we see that is not injective: as a concrete counterexample, .    According to , every complex number has a square-root. Thus for all there is a such that . This proves is surjective.      "
},
{
  "id": "d_complex_exp",
  "level": "2",
  "url": "s_complex_functions.html#d_complex_exp",
  "type": "Definition",
  "number": "1.6.6",
  "title": "Complex exponential function.",
  "body": " Complex exponential function   We define the (complex) exponential function  as . We will also us the notation to denote .   "
},
{
  "id": "ss_functions-8",
  "level": "2",
  "url": "s_complex_functions.html#ss_functions-8",
  "type": "Remark",
  "number": "1.6.7",
  "title": "Euler’s formula.",
  "body": " Euler's formula  At long last we have a convenient shorthand notation for complex elements of the form : namely, we see that . This equality is called Euler's formula . A particularly famous consequence of Euler's formula is given by Euler's equation : .  "
},
{
  "id": "th_exp",
  "level": "2",
  "url": "s_complex_functions.html#th_exp",
  "type": "Theorem",
  "number": "1.6.8",
  "title": "Exponential function properties.",
  "body": " Exponential function properties      We have for all .    We have if and only if and for some . In particular, is not injective.     .          Given complex numbers and , we have .    We have , where the last equivalence follows from the fact that the real exponential function is injective.    Given any we can write in polar form as for some and . Letting , we have . This shows that for all there is a such that . Thus . It is clear that , and hence that .      "
},
{
  "id": "rm_solve_exp",
  "level": "2",
  "url": "s_complex_functions.html#rm_solve_exp",
  "type": "Remark",
  "number": "1.6.9",
  "title": "Solving <span class=\"process-math\">\\(e^z=w\\)<\/span>.",
  "body": " Solving  From our analysis in the proof of , we saw that given a nonzero , the complex number , satisfies . It follows from (2) of that the set of all satisfying is thus . As such, as a sort of shorthand, we can express this set as , where as always is the set of all arguments of . Note that the various algebraic operations in that expression must be appropriately interpreted as an operations on sets.  "
},
{
  "id": "eg_square_transform",
  "level": "2",
  "url": "s_complex_functions.html#eg_square_transform",
  "type": "Example",
  "number": "1.6.10",
  "title": "Squaring transformation.",
  "body": " Squaring transformation   Define as . Sketch the given curves or regions in the complex -plane, as well as the image of these sets under in the complex -plane.    , .          , , .     ,      , .     , ,        We have , where and . Both descriptions will come in handy below.   Looking at the polar description of , we see that takes a point on , rotates it by and scales it by . It is clear then that .    From the polar description of , we see that , from whence it follows that for some . It is easy to see that if and only if for some . Thus maps to .    From the two previous parts, we conclude that maps to . See .    Given , we have . When , we see easily that this lies in , and that .  Assume . Setting and , we see (after a little algebra) that . This equation defines a horizontal parabola extending to the left in the -plane, with vertex , and it is easy to see that the image of under is this entire parabola.    A similar analysis as above shows that if , and the rightward opening horizontal parabola defined by .    Lastly, from the previous two parts it now follows that is the region bounded by the parabolas , , and . See .      "
},
{
  "id": "fig_square_trans",
  "level": "2",
  "url": "s_complex_functions.html#fig_square_trans",
  "type": "Figure",
  "number": "1.6.11",
  "title": "",
  "body": " Image of standard grid under    Standard grid   Standard xy-grid      Image of standard grid under   Image of standard xy-grid      "
},
{
  "id": "fig_square_trans_circle_rays",
  "level": "2",
  "url": "s_complex_functions.html#fig_square_trans_circle_rays",
  "type": "Figure",
  "number": "1.6.12",
  "title": "",
  "body": " Image of polar rectangle under    Polar grid portion   Polar grid      Image of polar grid portion under   Image of polar grid      "
},
{
  "id": "eg_exp_transform",
  "level": "2",
  "url": "s_complex_functions.html#eg_exp_transform",
  "type": "Example",
  "number": "1.6.13",
  "title": "Exponential transformation.",
  "body": " Exponential transformation   Define as . Sketch the given curves or regions in the complex -plane, as well as the image of these sets under in the complex -plane.    ,      , .     , ,        Writing we see that . From the first description we see that for fixed the set is the set of all complex numbers with modulus : , , the circle of radius centered at the origin.  From the second description we see that for fixed the set is the set of all positive scalar multiples of . (Positive since is positive for all .) This is precisely the ray of all complex numbers satisfying for some .  It follows that maps a rectangular region of the form to the polar rectangular region  . See .   "
},
{
  "id": "fig_exp_trans",
  "level": "2",
  "url": "s_complex_functions.html#fig_exp_trans",
  "type": "Figure",
  "number": "1.6.14",
  "title": "",
  "body": " Image of standard grid under    Standard grid   Standard grid of plane      Image of standard grid under   Image of standard grid under f      "
},
{
  "id": "fig_exp_trans_strip",
  "level": "2",
  "url": "s_complex_functions.html#fig_exp_trans_strip",
  "type": "Figure",
  "number": "1.6.15",
  "title": "",
  "body": " defines a bijection from to      Infinite horizontal strip      The image of under   Image of the strip under the exponential     "
},
{
  "id": "s_log_trig",
  "level": "1",
  "url": "s_log_trig.html",
  "type": "Section",
  "number": "1.7",
  "title": "Logarithmic and trigonometric functions",
  "body": " Logarithmic and trigonometric functions       Logarithmic functions  When showing that has image , we showed that for any , the set of solutions to is the set . This motivates the following definition.   Logarithm   Given , we define the logarithm of , denoted , to be the infinite set . The principal branch of the logarithm is the function defined as      Using the same sort of shorthand as in , we can write , where as always is the set of all arguments of .     We will see in due course that there is a good reason for the funny domain specified for . Namely, although we can in principle define for any , the domain ensures that is continuous, and is in a sense maximal in this regard.    as inverse function   Let , and define as : , is the restriction of to the set . The function is the inverse of : , we have .    Recall that we remarked in the discussion above that the given is a bijection, and hence invertible; the theorem claims that is the inverse of this function. First observe that , since . The identities are easily verified using the formulas for and applied to elements in and .     Logarithm   Compute and (if applicable) for the given .              .          We have .    We have . Technically, is not defined at .    We have .        Invalid identity   Show that is not always equal to .    In general we have . The issue preventing equality to hold in general is that . Indeed, taking and , we have .      Complex exponentiation   Complex exponentiation   Given and any , we define the set as . Given a fixed , the function defined as is called the principal branch of the power function with exponent (or principal branch of ).     Powers   Compute the following power expressions.         , .          We have .    For , we have .        -th roots   Let . Show that the set is precisely the set of distinct -th roots of .    By definition we have , which we recognize as the set of all -th roots of .  Note that the last equality above follows from the fact that for any , performing division with remainder by we can write for some integer and remainder satisfying , whence we have , and thus .      Trigonometric functions  Given a real number , from the identity and our formulas it follows that . It is then natural to extend these formulas for all complex numbers , yielding our definitions for the complex cosine and sine functions:    Trigonometric functions   We define the complex cosine and sine  and as follows: . We then further define complex extensions of the other elementary trigonometric functions in the usual way: .     Cosine and sine properties   Let .    if and only if for some , or for some .     if and only if for some or for some .    For all we have .          Given , we have . Next since if and only if for some , we see that if and only if if and only if , as claimed.    The proof of this statement is very similar to the one above.    These identities can be proved in a straightforward manner using the the defining formulas and properties of complex multiplication.        Complex hyperbolic functions   We define the complex hyperbolic functions  and as follows: .     Complex hyperbolic functions      For all we have .    For all we have .          These identities follow directly from and .    These identities follow directly from the sum identities in and .        "
},
{
  "id": "d_log",
  "level": "2",
  "url": "s_log_trig.html#d_log",
  "type": "Definition",
  "number": "1.7.1",
  "title": "Logarithm.",
  "body": " Logarithm   Given , we define the logarithm of , denoted , to be the infinite set . The principal branch of the logarithm is the function defined as    "
},
{
  "id": "ss_log-4",
  "level": "2",
  "url": "s_log_trig.html#ss_log-4",
  "type": "Remark",
  "number": "1.7.2",
  "title": "",
  "body": " Using the same sort of shorthand as in , we can write , where as always is the set of all arguments of .  "
},
{
  "id": "ss_log-5",
  "level": "2",
  "url": "s_log_trig.html#ss_log-5",
  "type": "Remark",
  "number": "1.7.3",
  "title": "<span class=\"process-math\">\\(\\Log\\)<\/span>.",
  "body": "  We will see in due course that there is a good reason for the funny domain specified for . Namely, although we can in principle define for any , the domain ensures that is continuous, and is in a sense maximal in this regard.  "
},
{
  "id": "th_exp_Log",
  "level": "2",
  "url": "s_log_trig.html#th_exp_Log",
  "type": "Theorem",
  "number": "1.7.4",
  "title": "<span class=\"process-math\">\\(\\Log\\)<\/span> as inverse function.",
  "body": " as inverse function   Let , and define as : , is the restriction of to the set . The function is the inverse of : , we have .    Recall that we remarked in the discussion above that the given is a bijection, and hence invertible; the theorem claims that is the inverse of this function. First observe that , since . The identities are easily verified using the formulas for and applied to elements in and .   "
},
{
  "id": "eg_log",
  "level": "2",
  "url": "s_log_trig.html#eg_log",
  "type": "Example",
  "number": "1.7.5",
  "title": "Logarithm.",
  "body": " Logarithm   Compute and (if applicable) for the given .              .          We have .    We have . Technically, is not defined at .    We have .      "
},
{
  "id": "eg_Log",
  "level": "2",
  "url": "s_log_trig.html#eg_Log",
  "type": "Example",
  "number": "1.7.6",
  "title": "Invalid identity.",
  "body": " Invalid identity   Show that is not always equal to .    In general we have . The issue preventing equality to hold in general is that . Indeed, taking and , we have .   "
},
{
  "id": "d_complex_exponentiation",
  "level": "2",
  "url": "s_log_trig.html#d_complex_exponentiation",
  "type": "Definition",
  "number": "1.7.7",
  "title": "Complex exponentiation.",
  "body": " Complex exponentiation   Given and any , we define the set as . Given a fixed , the function defined as is called the principal branch of the power function with exponent (or principal branch of ).   "
},
{
  "id": "eg_powers",
  "level": "2",
  "url": "s_log_trig.html#eg_powers",
  "type": "Example",
  "number": "1.7.8",
  "title": "Powers.",
  "body": " Powers   Compute the following power expressions.         , .          We have .    For , we have .      "
},
{
  "id": "eg_nth_roots",
  "level": "2",
  "url": "s_log_trig.html#eg_nth_roots",
  "type": "Example",
  "number": "1.7.9",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-th roots.",
  "body": " -th roots   Let . Show that the set is precisely the set of distinct -th roots of .    By definition we have , which we recognize as the set of all -th roots of .  Note that the last equality above follows from the fact that for any , performing division with remainder by we can write for some integer and remainder satisfying , whence we have , and thus .   "
},
{
  "id": "d_trig_functions",
  "level": "2",
  "url": "s_log_trig.html#d_trig_functions",
  "type": "Definition",
  "number": "1.7.10",
  "title": "Trigonometric functions.",
  "body": " Trigonometric functions   We define the complex cosine and sine  and as follows: . We then further define complex extensions of the other elementary trigonometric functions in the usual way: .   "
},
{
  "id": "th_trig_props",
  "level": "2",
  "url": "s_log_trig.html#th_trig_props",
  "type": "Theorem",
  "number": "1.7.11",
  "title": "Cosine and sine properties.",
  "body": " Cosine and sine properties   Let .    if and only if for some , or for some .     if and only if for some or for some .    For all we have .          Given , we have . Next since if and only if for some , we see that if and only if if and only if , as claimed.    The proof of this statement is very similar to the one above.    These identities can be proved in a straightforward manner using the the defining formulas and properties of complex multiplication.      "
},
{
  "id": "d_hyperbolic",
  "level": "2",
  "url": "s_log_trig.html#d_hyperbolic",
  "type": "Definition",
  "number": "1.7.12",
  "title": "Complex hyperbolic functions.",
  "body": " Complex hyperbolic functions   We define the complex hyperbolic functions  and as follows: .   "
},
{
  "id": "th_hyperbolic",
  "level": "2",
  "url": "s_log_trig.html#th_hyperbolic",
  "type": "Theorem",
  "number": "1.7.13",
  "title": "Complex hyperbolic functions.",
  "body": " Complex hyperbolic functions      For all we have .    For all we have .          These identities follow directly from and .    These identities follow directly from the sum identities in and .      "
},
{
  "id": "s_lim_cont",
  "level": "1",
  "url": "s_lim_cont.html",
  "type": "Section",
  "number": "1.8",
  "title": "Limits of functions and continuity",
  "body": " Limits of functions and continuity   Single-variable calculus can be succinctly described as the science of functions of the form , where . The main tools of that science are the derivative and the integral, both of which rely on the more fundamental concept of the limit.    Limits of functions   Limit point   Given a subset , a limit point (or accumulation point ) of is an element satisfying the following property: given any , the open disc contains an element of that is distinct from .     Limit points      Show that all elements of an open set are limit points of .    Given a subset Show that any point is a limit point of .    Give an example of a set and a boundary point that is not a limit point of .            Limit of a function   Let be a complex function, and let be a limit point of . We say the limit of as approaches exists if there is a complex number satisfying the following property: for all , there exists a such that if , then .  When this is the case we call the limit of as approaches , and write . Otherwise we say that does not exist.     Limit of function via sequences   Let and let be a limit point of . The following statements are equivalent.        For all sequences of elements of satisfying , we have .       We prove each implication separately.   Implication: (1) (2)  Assume , and suppose for a sequence consisting of elements of . We show that . To this end, given any , there is a such that . Since , there is an such that for all . It follows that for all , either or . In either case, the displayed implication above implies that , as desired.    Implication: (2) (1)  We will prove the contrapositive. Suppose that . By definition, this means there exists an such that for each there exists a satisfying but . It follows easily that is a sequence of elements of satisfying and , as desired.      No limit   Define as . Show that does not exist.    It is easy to see that if the limit existed, then we would have for any two sequences and . Taking the sequences and , however, it is easy to see that and , and yet . We conclude that the limit does not exist.     Limits of functions   Let and be complex functions, and let be a limit point of the domains of and .   Write in terms of its real and imaginary parts. The limit exists if and only if and exist, in which case we have .     if and only if .    If , then and .    If and , then .            Limit of power function   Let , where is a positive integer. Prove: for all , .    There are a number ways of proving this statement. We give a proof by induction for .  Base step: . Given any , setting , we have , since and in this case. This proves when .  Induction step: we assume that and show that . To do so we use the induction hypothesis and the multiplicative property of limits from :       Continuity  We end with the notion of continuity. You will notice a strong resemblance between the definition of continuity of a function at a point and the limit of that function at a point. The true nature of this connection is articulated by .   Continuous functions   Let be a complex function. Given an element , we say that is continuous at if the following property holds: for all , there exists a such that if , then .  We say is continuous on a subset , if is continuous at all points . We say is continuous if is continuous on .     Continuity and limits   Let be a complex function. The following are equivalent.    is continuous.    For all elements that are limit points of , we have .    For all sequences of elements of satisfying , we have .       We will prove the cycle of implications (1) (2) (3) (1).   Implication: (1) (2)  Assume is an accumulation point of and that is continuous at . We will show that . Indeed, since is continuous at given any , there is a such that for all . But then it is certainly true that for all . Thus .    Implication: (2) (3)  Assume (2) holds. Given any , we wish to show that for all sequences of elements of satisfying , we have . If is a limit point of , then this follows immediately from . On the other hand, if is not a limit point of , it is easy to see that there is no sequence of elements of satisfying , and so the condition is satisfied vacuously!    Implication: (3) (1)  We prove the contrapositive, using an argument very similar to the one in . Namely, assuming is not continuous at , we can find an and a sequence of elements of satisfying and . It follows that but , as desired.      Continuity properties   Let and be complex functions.   Write in terms of its real and imaginary parts. We have is continuous at if and only if and are continuous at .    If and are continuous at , then so are .    If is continuous at and is continuous at , then is continuous at .        Continuous zoo   Every complex function we have defined thus far is continuous on its domain.    We content ourselves to prove this statement for a few examples.  Consider . For we have , where . Using continuity properties of real-valued functions of two variables, we see easily that and are both continuous everywhere. Thus is continuous. (It then follows easily that all of the trigonometric and hyperbolic functions are continuous, since they are defined in terms of using elementary operations.)  Consider , where and for all . Since the identity function is obviously continuous, so is . Since is continuous, so is the composition . Lastly, you showed in your homework that is continuous. Since the real and imaginary parts of are continuous, we conclude that is continuous.  Fix a complex number . Having established that is continuous on it follows that the principal branch of defined as is continuous on its domain .     "
},
{
  "id": "d_limit_point",
  "level": "2",
  "url": "s_lim_cont.html#d_limit_point",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Limit point.",
  "body": " Limit point   Given a subset , a limit point (or accumulation point ) of is an element satisfying the following property: given any , the open disc contains an element of that is distinct from .   "
},
{
  "id": "eg_limit_points",
  "level": "2",
  "url": "s_lim_cont.html#eg_limit_points",
  "type": "Example",
  "number": "1.8.2",
  "title": "Limit points.",
  "body": " Limit points      Show that all elements of an open set are limit points of .    Given a subset Show that any point is a limit point of .    Give an example of a set and a boundary point that is not a limit point of .          "
},
{
  "id": "d_lim_func",
  "level": "2",
  "url": "s_lim_cont.html#d_lim_func",
  "type": "Definition",
  "number": "1.8.3",
  "title": "Limit of a function.",
  "body": " Limit of a function   Let be a complex function, and let be a limit point of . We say the limit of as approaches exists if there is a complex number satisfying the following property: for all , there exists a such that if , then .  When this is the case we call the limit of as approaches , and write . Otherwise we say that does not exist.   "
},
{
  "id": "th_lim_fun_seq",
  "level": "2",
  "url": "s_lim_cont.html#th_lim_fun_seq",
  "type": "Theorem",
  "number": "1.8.4",
  "title": "Limit of function via sequences.",
  "body": " Limit of function via sequences   Let and let be a limit point of . The following statements are equivalent.        For all sequences of elements of satisfying , we have .       We prove each implication separately.   Implication: (1) (2)  Assume , and suppose for a sequence consisting of elements of . We show that . To this end, given any , there is a such that . Since , there is an such that for all . It follows that for all , either or . In either case, the displayed implication above implies that , as desired.    Implication: (2) (1)  We will prove the contrapositive. Suppose that . By definition, this means there exists an such that for each there exists a satisfying but . It follows easily that is a sequence of elements of satisfying and , as desired.    "
},
{
  "id": "eg_lim_dne",
  "level": "2",
  "url": "s_lim_cont.html#eg_lim_dne",
  "type": "Example",
  "number": "1.8.5",
  "title": "No limit.",
  "body": " No limit   Define as . Show that does not exist.    It is easy to see that if the limit existed, then we would have for any two sequences and . Taking the sequences and , however, it is easy to see that and , and yet . We conclude that the limit does not exist.   "
},
{
  "id": "th_lim_func",
  "level": "2",
  "url": "s_lim_cont.html#th_lim_func",
  "type": "Theorem",
  "number": "1.8.6",
  "title": "Limits of functions.",
  "body": " Limits of functions   Let and be complex functions, and let be a limit point of the domains of and .   Write in terms of its real and imaginary parts. The limit exists if and only if and exist, in which case we have .     if and only if .    If , then and .    If and , then .          "
},
{
  "id": "eg_lim_power",
  "level": "2",
  "url": "s_lim_cont.html#eg_lim_power",
  "type": "Example",
  "number": "1.8.7",
  "title": "Limit of power function.",
  "body": " Limit of power function   Let , where is a positive integer. Prove: for all , .    There are a number ways of proving this statement. We give a proof by induction for .  Base step: . Given any , setting , we have , since and in this case. This proves when .  Induction step: we assume that and show that . To do so we use the induction hypothesis and the multiplicative property of limits from :    "
},
{
  "id": "d_cont",
  "level": "2",
  "url": "s_lim_cont.html#d_cont",
  "type": "Definition",
  "number": "1.8.8",
  "title": "Continuous functions.",
  "body": " Continuous functions   Let be a complex function. Given an element , we say that is continuous at if the following property holds: for all , there exists a such that if , then .  We say is continuous on a subset , if is continuous at all points . We say is continuous if is continuous on .   "
},
{
  "id": "th_cont_lim",
  "level": "2",
  "url": "s_lim_cont.html#th_cont_lim",
  "type": "Theorem",
  "number": "1.8.9",
  "title": "Continuity and limits.",
  "body": " Continuity and limits   Let be a complex function. The following are equivalent.    is continuous.    For all elements that are limit points of , we have .    For all sequences of elements of satisfying , we have .       We will prove the cycle of implications (1) (2) (3) (1).   Implication: (1) (2)  Assume is an accumulation point of and that is continuous at . We will show that . Indeed, since is continuous at given any , there is a such that for all . But then it is certainly true that for all . Thus .    Implication: (2) (3)  Assume (2) holds. Given any , we wish to show that for all sequences of elements of satisfying , we have . If is a limit point of , then this follows immediately from . On the other hand, if is not a limit point of , it is easy to see that there is no sequence of elements of satisfying , and so the condition is satisfied vacuously!    Implication: (3) (1)  We prove the contrapositive, using an argument very similar to the one in . Namely, assuming is not continuous at , we can find an and a sequence of elements of satisfying and . It follows that but , as desired.    "
},
{
  "id": "th_cont_prop",
  "level": "2",
  "url": "s_lim_cont.html#th_cont_prop",
  "type": "Theorem",
  "number": "1.8.10",
  "title": "Continuity properties.",
  "body": " Continuity properties   Let and be complex functions.   Write in terms of its real and imaginary parts. We have is continuous at if and only if and are continuous at .    If and are continuous at , then so are .    If is continuous at and is continuous at , then is continuous at .      "
},
{
  "id": "th_cont_egs",
  "level": "2",
  "url": "s_lim_cont.html#th_cont_egs",
  "type": "Theorem",
  "number": "1.8.11",
  "title": "Continuous zoo.",
  "body": " Continuous zoo   Every complex function we have defined thus far is continuous on its domain.    We content ourselves to prove this statement for a few examples.  Consider . For we have , where . Using continuity properties of real-valued functions of two variables, we see easily that and are both continuous everywhere. Thus is continuous. (It then follows easily that all of the trigonometric and hyperbolic functions are continuous, since they are defined in terms of using elementary operations.)  Consider , where and for all . Since the identity function is obviously continuous, so is . Since is continuous, so is the composition . Lastly, you showed in your homework that is continuous. Since the real and imaginary parts of are continuous, we conclude that is continuous.  Fix a complex number . Having established that is continuous on it follows that the principal branch of defined as is continuous on its domain .   "
},
{
  "id": "s_derivative",
  "level": "1",
  "url": "s_derivative.html",
  "type": "Section",
  "number": "1.9",
  "title": "Complex differentiation",
  "body": " Complex differentiation   Interior point   Given a subset , an element is an interior point of if there is an such that . The interior of , denoted is defined as the set of all interior points of .     Interior points  The following observations follows easily from the relevant definitions.   If is an interior point of , then is a limit point of ,    If is an open subset of , then all points of are interior points: , .       Complex differentiation   Given a complex function and an interior point of the domain of , we say is differentiable at if the limit exists. When this is the case we call the value of this limit the derivative of at , denoted .  The function is holomorphic (or analytic ) on an open set if it is differentiable at all points in . When is holomorphic on , the function is called the derivative of . We will also denote as , and will write to denote the derivative operation.     Holomorphic versus analytic  Technically speaking, a function analytic on an open set if for all we can represent as a convergent power series of all in an open ball around . One of the headline theorems of this class is that is differentiable on if and only if it is analytic (in the sense just described). Consequently, in the literature the terms differentiable , holomorphic , and analytic are used pretty much interchangeably. However, we will refrain from using analytic until the theorem in question is proved.    Differentiable at a limit point  In light of the limit definition of differentiability, it is of course possible to define this notion at any limit point of the domain of a function. As it turns out, however, an openness condition like the one we adopt is the more natural setting in terms of further important theorems ( , ).    Elementary examples   Prove that the given is differentiable on the given open set and provide a formula for .   Constant function   , , .    Identity function   , .    Squaring function   , .    Reciprocal function   , .       It is easy to see using the limit definition that and . We illustrate the definition only for and .  Given and any , we have . This shows that for all .  Now let . We have . This shows that for all .     Differentiable implies continuous   If is differentiable at , then is continuous at .    Note that by definition, is assumed to be an interior point of the domain of , which implies that is a limit point of the domain. We are thus justified in using the limit definition of continuity. We have . Thus is continuous at .     Derivative properties   Assume and are differentiable at    Linear combination  For all , is differentiable at and .    Product   is differentiable at and     Quotient rule  Provided , is differentiable at and .       These statements are proved in essentially the same way as the corresponding statements from elementary calculus. We omit them here.     Polynomials   Let . Show that is differentiable on and compute a formula for .    First observe that for all nonnegative integers the function is differentiable and satisfies . This is shown easily by induction: the base case is just the constant function , and for the induction step, we have .     Chain rule   Assume is differentiable at and is differentiable at . The composition is differentiable at and .    This is left as a homework exercise.    "
},
{
  "id": "d_interior_pt",
  "level": "2",
  "url": "s_derivative.html#d_interior_pt",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Interior point.",
  "body": " Interior point   Given a subset , an element is an interior point of if there is an such that . The interior of , denoted is defined as the set of all interior points of .   "
},
{
  "id": "s_derivative-3",
  "level": "2",
  "url": "s_derivative.html#s_derivative-3",
  "type": "Remark",
  "number": "1.9.2",
  "title": "Interior points.",
  "body": " Interior points  The following observations follows easily from the relevant definitions.   If is an interior point of , then is a limit point of ,    If is an open subset of , then all points of are interior points: , .     "
},
{
  "id": "d_derivative",
  "level": "2",
  "url": "s_derivative.html#d_derivative",
  "type": "Definition",
  "number": "1.9.3",
  "title": "Complex differentiation.",
  "body": " Complex differentiation   Given a complex function and an interior point of the domain of , we say is differentiable at if the limit exists. When this is the case we call the value of this limit the derivative of at , denoted .  The function is holomorphic (or analytic ) on an open set if it is differentiable at all points in . When is holomorphic on , the function is called the derivative of . We will also denote as , and will write to denote the derivative operation.   "
},
{
  "id": "s_derivative-5",
  "level": "2",
  "url": "s_derivative.html#s_derivative-5",
  "type": "Remark",
  "number": "1.9.4",
  "title": "Holomorphic versus analytic.",
  "body": " Holomorphic versus analytic  Technically speaking, a function analytic on an open set if for all we can represent as a convergent power series of all in an open ball around . One of the headline theorems of this class is that is differentiable on if and only if it is analytic (in the sense just described). Consequently, in the literature the terms differentiable , holomorphic , and analytic are used pretty much interchangeably. However, we will refrain from using analytic until the theorem in question is proved.  "
},
{
  "id": "s_derivative-6",
  "level": "2",
  "url": "s_derivative.html#s_derivative-6",
  "type": "Remark",
  "number": "1.9.5",
  "title": "Differentiable at a limit point.",
  "body": " Differentiable at a limit point  In light of the limit definition of differentiability, it is of course possible to define this notion at any limit point of the domain of a function. As it turns out, however, an openness condition like the one we adopt is the more natural setting in terms of further important theorems ( , ).  "
},
{
  "id": "eg_elem_derivs",
  "level": "2",
  "url": "s_derivative.html#eg_elem_derivs",
  "type": "Example",
  "number": "1.9.6",
  "title": "Elementary examples.",
  "body": " Elementary examples   Prove that the given is differentiable on the given open set and provide a formula for .   Constant function   , , .    Identity function   , .    Squaring function   , .    Reciprocal function   , .       It is easy to see using the limit definition that and . We illustrate the definition only for and .  Given and any , we have . This shows that for all .  Now let . We have . This shows that for all .   "
},
{
  "id": "th_diff_cont",
  "level": "2",
  "url": "s_derivative.html#th_diff_cont",
  "type": "Theorem",
  "number": "1.9.7",
  "title": "Differentiable implies continuous.",
  "body": " Differentiable implies continuous   If is differentiable at , then is continuous at .    Note that by definition, is assumed to be an interior point of the domain of , which implies that is a limit point of the domain. We are thus justified in using the limit definition of continuity. We have . Thus is continuous at .   "
},
{
  "id": "th_diff_props",
  "level": "2",
  "url": "s_derivative.html#th_diff_props",
  "type": "Theorem",
  "number": "1.9.8",
  "title": "Derivative properties.",
  "body": " Derivative properties   Assume and are differentiable at    Linear combination  For all , is differentiable at and .    Product   is differentiable at and     Quotient rule  Provided , is differentiable at and .       These statements are proved in essentially the same way as the corresponding statements from elementary calculus. We omit them here.   "
},
{
  "id": "eg_diff_poly",
  "level": "2",
  "url": "s_derivative.html#eg_diff_poly",
  "type": "Example",
  "number": "1.9.9",
  "title": "Polynomials.",
  "body": " Polynomials   Let . Show that is differentiable on and compute a formula for .    First observe that for all nonnegative integers the function is differentiable and satisfies . This is shown easily by induction: the base case is just the constant function , and for the induction step, we have .   "
},
{
  "id": "th_chain",
  "level": "2",
  "url": "s_derivative.html#th_chain",
  "type": "Theorem",
  "number": "1.9.10",
  "title": "Chain rule.",
  "body": " Chain rule   Assume is differentiable at and is differentiable at . The composition is differentiable at and .    This is left as a homework exercise.   "
},
{
  "id": "s_C-R",
  "level": "1",
  "url": "s_C-R.html",
  "type": "Section",
  "number": "1.10",
  "title": "Cauchy-Riemann equations",
  "body": " Cauchy-Riemann equations   We come at last to our first important result, the Cauchy-Riemann equations , which express the differentiability of a complex function in terms of its real and imaginary parts.    Cauchy-Riemann equations  The Cauchy-Riemann equations involve the partial derivatives of the real and imaginary parts of a complex function. We give a brief reminder of the definitions and notation around this concept.   Partial derivatives  Given a real-valued function of two real variables and an interior point of its domain, the partial derivatives of at with respect to and are defined as , provided of course these limits exist. We denote the resulting partial derivative functions as and , or alternatively as and .    Cauchy-Riemann equations   If is differentiable at , then the first-order partial derivatives of and exist at and satisfy the Cauchy-Riemann equations : . Furthermore, we have .         Cauchy-Riemann verification   Verify that the real and imaginary parts of the holomorphic function satisfy the Cauchy-Riemann equations for all , and that satisfies .    We have , where , , and thus . It is clear from these computations that . Furthermore, we saw previously that , and hence that .     Complex conjugation   Define as . Prove that is not differentiable anywhere on its domain.    We have , where and . Thus for any we have . It follow that for all we have . We conclude that for all , is not differentiable at , as claimed.    As stated, provides only a necessary condition for to exist at ; it makes no claim as to whether this condition is sufficient . The next theorem improves on this slightly, by establishing something close, but not quite equal to the converse of . Roughly speaking, it asserts that satisfaction of the Cauchy-Riemann equations suffices as long as we throw in a certain continuity condition on the first-order partial derivatives. We will see later that when considering differentiability on open sets this extra condition is in fact automatically satisfied, yielding a true equivalence.   Cauchy-Riemann converse   Assume and that is an interior point of the domain of . If the first-order partial derivatives of and are continuous on an open set containing and satisfy the Cauchy-Riemann equations, then is differentiable at .    In lieu of a proof, we indicate the ideas at play. As it turns out, the condition we actually need, in addition to the satisfaction of the Cauchy-Riemann equations, is that the function is differentiable in the sense of multivariable calculus. I will not include that definition here (look it up in your calculus text!), but suffice it to say that it is not equivalent to the partial derivatives of and existing. The additional continuity condition given in the theorem implies that is differentiable in the multivariable calculus sense, and hence, that is differentiable in the complex sense, assuming the Cauchy-Riemann equations are satisfied.    As an immediate corollary of we have the following corollary, which will be our main tool for investigating differentiability.   Cauchy-Riemann on open set   Assume is defined on the open set , and that and have continuous first-order partial derivatives on . The following statements are equivalent.    is differentiable on .     and satisfy for all .   When this is the case, we have for all .     Exponential and trigonometric functions   Show that , , and are holomorphic functions on and compute formulas for their derivatives.    We have , where and . We then have , whence we see that (a) these partials exist and are continuous, and (b) satisfy the Cauchy-Riemann equations for all . We conclude that is differentiable everywhere and satisfies . That are differentiable everywhere now follows from the fact that the polynomial functions and are differentiable, from which it follows by the chain rule that and are differentiable, and then from the linear combination rule of that and are differentiable everywhere. Furthermore we can compute the derivatives of and using these same rules and our formula for to conclude that .    As with good old-fashioned calculus, a complex function whose derivative is zero everywhere (on a connected open set) is constant. Let's see why this is so. First some definitions and conventions.   Restrictions and constant functions  Given a function and subset , we denote by the restriction of to : that is . Note that although is defined via the same rule as , if , it is technically a different function.  Given we say that is on constant on if there is a complex number such that for all . We will write in this case.    Locally constant   A function is locally constant on a set if for all there is an open ball such that is constant on .     Functions of derivative zero   Let be defined on the open set . The following statements are equivalent.    is locally constant on .     for all .        Implication: (i) (ii)  Assume is locally constant. Given any we can find an open ball such that the restriction . for some . It is easy to see that is differentiable at if and only if its restriction is differentiable at , and that , since is constant. (See .) It follows that for all .    Implication: (ii) (i)  Assume for all . We will show that is locally constant. Given , there is an open ball . Writing and using , we have and thus for all . Since is connected, it follows from multivariable calculus facts that and for some constants for all . Thus the restriction is constant on . This proves is locally constant.     The next corollary follows directly from and . The latter was left as a homework exercise, but is important enough to enshrine here as an official result.    Assume is holomorphic on the open and connected set . If is constant on or is constant on , then is constant on .     Discrete subset   A set is discrete if for all there is an open ball such that .     Locally constant on connected sets   Assume is continuous on the connected set . The following statements are equivalent.    is constant     is locally constant.     is a discrete subset of .       This is left as a homework exercise.      Polar Cauchy-Riemann equations  As many of our familiar functions have a nice description in polar coordinates, it helps to have a corresponding polar version of the Cauchy-Riemann equations. Technically speaking, when we represent a function in polar coordinates we are really looking at the function , obtained by pre-composing  with the function defined as . In an effort to pare down notation, we will adopt the following abuses of notation: . As a result, we can express the chain rule applied to as follows: .   Polar Cauchy-Riemann equations   Assume is defined on the open set and that and have continuous first-order partial derivatives on . The following statements are equivalent.    is differentiable on .    For all satisfying , we have .   When this is the case, given , we have .    This is left as a homework exercise.     Derivative of   Show that is differentiable on its domain and compute a formula for its derivative.    Fix any , and write . Picking a small enough neighborhood in the -plane, we can assume that for close enough to we have if and only if and for some fixed . It follows that and thus and . Computing partial derivatives, we see have , from which we see clearly that . It follows that is differentiable on and that given , we have . We conclude that for all , as desired.     Reciprocal function   Define as . Re-derive the derivative formula using the polar Cauchy-Riemann equations.    For , we have , and thus and . The relevant partial derivatives are then . We then easily see that . We conclude that is differentiable on and .     Derivative of power function   Fix a complex number and define to be the principle branch of . Show that is differentiable on its domain and compute a formula for its derivative.    The function has formula . The derivative of is easily computed using the the chain rule: . You were expecting ? Since and are not complex functions in themselves, the answer was never going to be this easy. However, writing and swapping out for , we see that our formula is equivalent to the familiar power rule.     "
},
{
  "id": "ss_C-r-3",
  "level": "2",
  "url": "s_C-R.html#ss_C-r-3",
  "type": "Convention",
  "number": "1.10.1",
  "title": "Partial derivatives.",
  "body": " Partial derivatives  Given a real-valued function of two real variables and an interior point of its domain, the partial derivatives of at with respect to and are defined as , provided of course these limits exist. We denote the resulting partial derivative functions as and , or alternatively as and .  "
},
{
  "id": "th_C-R",
  "level": "2",
  "url": "s_C-R.html#th_C-R",
  "type": "Theorem",
  "number": "1.10.2",
  "title": "Cauchy-Riemann equations.",
  "body": " Cauchy-Riemann equations   If is differentiable at , then the first-order partial derivatives of and exist at and satisfy the Cauchy-Riemann equations : . Furthermore, we have .       "
},
{
  "id": "eg_CR_verify",
  "level": "2",
  "url": "s_C-R.html#eg_CR_verify",
  "type": "Example",
  "number": "1.10.3",
  "title": "Cauchy-Riemann verification.",
  "body": " Cauchy-Riemann verification   Verify that the real and imaginary parts of the holomorphic function satisfy the Cauchy-Riemann equations for all , and that satisfies .    We have , where , , and thus . It is clear from these computations that . Furthermore, we saw previously that , and hence that .   "
},
{
  "id": "eg_conjugate",
  "level": "2",
  "url": "s_C-R.html#eg_conjugate",
  "type": "Example",
  "number": "1.10.4",
  "title": "Complex conjugation.",
  "body": " Complex conjugation   Define as . Prove that is not differentiable anywhere on its domain.    We have , where and . Thus for any we have . It follow that for all we have . We conclude that for all , is not differentiable at , as claimed.   "
},
{
  "id": "th_C-R_cont_equiv",
  "level": "2",
  "url": "s_C-R.html#th_C-R_cont_equiv",
  "type": "Theorem",
  "number": "1.10.5",
  "title": "Cauchy-Riemann converse.",
  "body": " Cauchy-Riemann converse   Assume and that is an interior point of the domain of . If the first-order partial derivatives of and are continuous on an open set containing and satisfy the Cauchy-Riemann equations, then is differentiable at .    In lieu of a proof, we indicate the ideas at play. As it turns out, the condition we actually need, in addition to the satisfaction of the Cauchy-Riemann equations, is that the function is differentiable in the sense of multivariable calculus. I will not include that definition here (look it up in your calculus text!), but suffice it to say that it is not equivalent to the partial derivatives of and existing. The additional continuity condition given in the theorem implies that is differentiable in the multivariable calculus sense, and hence, that is differentiable in the complex sense, assuming the Cauchy-Riemann equations are satisfied.   "
},
{
  "id": "cor_C-R_open",
  "level": "2",
  "url": "s_C-R.html#cor_C-R_open",
  "type": "Corollary",
  "number": "1.10.6",
  "title": "Cauchy-Riemann on open set.",
  "body": " Cauchy-Riemann on open set   Assume is defined on the open set , and that and have continuous first-order partial derivatives on . The following statements are equivalent.    is differentiable on .     and satisfy for all .   When this is the case, we have for all .   "
},
{
  "id": "eg_exp_diff",
  "level": "2",
  "url": "s_C-R.html#eg_exp_diff",
  "type": "Example",
  "number": "1.10.7",
  "title": "Exponential and trigonometric functions.",
  "body": " Exponential and trigonometric functions   Show that , , and are holomorphic functions on and compute formulas for their derivatives.    We have , where and . We then have , whence we see that (a) these partials exist and are continuous, and (b) satisfy the Cauchy-Riemann equations for all . We conclude that is differentiable everywhere and satisfies . That are differentiable everywhere now follows from the fact that the polynomial functions and are differentiable, from which it follows by the chain rule that and are differentiable, and then from the linear combination rule of that and are differentiable everywhere. Furthermore we can compute the derivatives of and using these same rules and our formula for to conclude that .   "
},
{
  "id": "ss_C-r-13",
  "level": "2",
  "url": "s_C-R.html#ss_C-r-13",
  "type": "Convention",
  "number": "1.10.8",
  "title": "Restrictions and constant functions.",
  "body": " Restrictions and constant functions  Given a function and subset , we denote by the restriction of to : that is . Note that although is defined via the same rule as , if , it is technically a different function.  Given we say that is on constant on if there is a complex number such that for all . We will write in this case.  "
},
{
  "id": "d_locally_constant",
  "level": "2",
  "url": "s_C-R.html#d_locally_constant",
  "type": "Definition",
  "number": "1.10.9",
  "title": "Locally constant.",
  "body": " Locally constant   A function is locally constant on a set if for all there is an open ball such that is constant on .   "
},
{
  "id": "th_zero_deriv",
  "level": "2",
  "url": "s_C-R.html#th_zero_deriv",
  "type": "Theorem",
  "number": "1.10.10",
  "title": "Functions of derivative zero.",
  "body": " Functions of derivative zero   Let be defined on the open set . The following statements are equivalent.    is locally constant on .     for all .        Implication: (i) (ii)  Assume is locally constant. Given any we can find an open ball such that the restriction . for some . It is easy to see that is differentiable at if and only if its restriction is differentiable at , and that , since is constant. (See .) It follows that for all .    Implication: (ii) (i)  Assume for all . We will show that is locally constant. Given , there is an open ball . Writing and using , we have and thus for all . Since is connected, it follows from multivariable calculus facts that and for some constants for all . Thus the restriction is constant on . This proves is locally constant.    "
},
{
  "id": "cor_const_u_v",
  "level": "2",
  "url": "s_C-R.html#cor_const_u_v",
  "type": "Corollary",
  "number": "1.10.11",
  "title": "",
  "body": "  Assume is holomorphic on the open and connected set . If is constant on or is constant on , then is constant on .   "
},
{
  "id": "d_discrete",
  "level": "2",
  "url": "s_C-R.html#d_discrete",
  "type": "Definition",
  "number": "1.10.12",
  "title": "Discrete subset.",
  "body": " Discrete subset   A set is discrete if for all there is an open ball such that .   "
},
{
  "id": "th_locally_constant_connected",
  "level": "2",
  "url": "s_C-R.html#th_locally_constant_connected",
  "type": "Theorem",
  "number": "1.10.13",
  "title": "Locally constant on connected sets.",
  "body": " Locally constant on connected sets   Assume is continuous on the connected set . The following statements are equivalent.    is constant     is locally constant.     is a discrete subset of .       This is left as a homework exercise.   "
},
{
  "id": "th_C-R_polar",
  "level": "2",
  "url": "s_C-R.html#th_C-R_polar",
  "type": "Theorem",
  "number": "1.10.14",
  "title": "Polar Cauchy-Riemann equations.",
  "body": " Polar Cauchy-Riemann equations   Assume is defined on the open set and that and have continuous first-order partial derivatives on . The following statements are equivalent.    is differentiable on .    For all satisfying , we have .   When this is the case, given , we have .    This is left as a homework exercise.   "
},
{
  "id": "eg_der_Log",
  "level": "2",
  "url": "s_C-R.html#eg_der_Log",
  "type": "Example",
  "number": "1.10.15",
  "title": "Derivative of <span class=\"process-math\">\\(\\Log\\)<\/span>.",
  "body": " Derivative of   Show that is differentiable on its domain and compute a formula for its derivative.    Fix any , and write . Picking a small enough neighborhood in the -plane, we can assume that for close enough to we have if and only if and for some fixed . It follows that and thus and . Computing partial derivatives, we see have , from which we see clearly that . It follows that is differentiable on and that given , we have . We conclude that for all , as desired.   "
},
{
  "id": "d_der_reciprocal",
  "level": "2",
  "url": "s_C-R.html#d_der_reciprocal",
  "type": "Example",
  "number": "1.10.16",
  "title": "Reciprocal function.",
  "body": " Reciprocal function   Define as . Re-derive the derivative formula using the polar Cauchy-Riemann equations.    For , we have , and thus and . The relevant partial derivatives are then . We then easily see that . We conclude that is differentiable on and .   "
},
{
  "id": "eg_der_power",
  "level": "2",
  "url": "s_C-R.html#eg_der_power",
  "type": "Example",
  "number": "1.10.17",
  "title": "Derivative of power function.",
  "body": " Derivative of power function   Fix a complex number and define to be the principle branch of . Show that is differentiable on its domain and compute a formula for its derivative.    The function has formula . The derivative of is easily computed using the the chain rule: . You were expecting ? Since and are not complex functions in themselves, the answer was never going to be this easy. However, writing and swapping out for , we see that our formula is equivalent to the familiar power rule.   "
},
{
  "id": "s_branch_harmonic",
  "level": "1",
  "url": "s_branch_harmonic.html",
  "type": "Section",
  "number": "1.11",
  "title": "Branches, harmonic functions, flows",
  "body": " Branches, harmonic functions, flows   We will round out our discussion of differentiability with some miscellany, each item of which will be take up again in the course.    Branches  We threw the term branch around earlier when discussing notions of argument, logarithms, and complex powers. It is time at last to put this notion on firm, if somewhat formal ground.   Branch   A complex set-valued function is a function whose domain is a subset , and whose images are sets of complex numbers for all .  A branch of a set-valued function with domain is a function satisfying the following properties:    is open and connected;     is continuous;     for all .          Given , we define to be the ray , and we define the -cut branch of to be the function defined as follows: for all , is the unique satisfying .  Similarly, we define the -cut branch of to be the function defined as ; and for a fixed , we define the -cut branch of to be the function .     -anchored branches  It is easy to see that is indeed a branch of for all , and as a result, that the -anchored branches of and the set-valued function are also branches.  Note further that the principal branches of these three set-valued functions are just the -anchored branches in our new terminology.    is holomorphic   Show that the branch is holomorphic on its domain and satisfies     As in , we use the Cauchy-Riemann equations. Fix . Picking a small enough neighborhood in the -plane, we can assume that for close enough to we have if and only if and for some fixed . for some , and hence and for some .     Branches   Let be open and connected.   Argument  If and are two branches of on , then there is a such that for all .    Logarithm     If and are two branches of on , then there is a such that for all .    Any branch of on is differentiable and satisfies for all .       Power functions  Fix , and let .   If and are two branches of on , then there is a such that for all .    Any branch of on is differentiable and satisfies for all .               Branches of cube-root function   Let .   Show that there are exactly three branches of on $U$ and give explicit formulas for each.    Verify that holds for one of your three branches.             Harmonic functions   Harmonic functions   Let be an open set. A function is harmonic if it satisfies the Laplace's equation  for all .  A pair of harmonic conjugates on is a pair of harmonic functions on satisfying .     Harmonic conjugates   Assume is an open subset of (identified as usual with ). Assume and are real-valued functions on whose second-order partial derivatives exist on . The following statements are equivalent.    and are harmonic and     is holomorphic on .            "
},
{
  "id": "d_branch",
  "level": "2",
  "url": "s_branch_harmonic.html#d_branch",
  "type": "Definition",
  "number": "1.11.1",
  "title": "Branch.",
  "body": " Branch   A complex set-valued function is a function whose domain is a subset , and whose images are sets of complex numbers for all .  A branch of a set-valued function with domain is a function satisfying the following properties:    is open and connected;     is continuous;     for all .      "
},
{
  "id": "d_arg_branches",
  "level": "2",
  "url": "s_branch_harmonic.html#d_arg_branches",
  "type": "Definition",
  "number": "1.11.2",
  "title": ".",
  "body": "   Given , we define to be the ray , and we define the -cut branch of to be the function defined as follows: for all , is the unique satisfying .  Similarly, we define the -cut branch of to be the function defined as ; and for a fixed , we define the -cut branch of to be the function .   "
},
{
  "id": "ss_branch-5",
  "level": "2",
  "url": "s_branch_harmonic.html#ss_branch-5",
  "type": "Remark",
  "number": "1.11.3",
  "title": "<span class=\"process-math\">\\(\\alpha\\)<\/span>-anchored branches.",
  "body": " -anchored branches  It is easy to see that is indeed a branch of for all , and as a result, that the -anchored branches of and the set-valued function are also branches.  Note further that the principal branches of these three set-valued functions are just the -anchored branches in our new terminology.  "
},
{
  "id": "eg_alpha_cuts",
  "level": "2",
  "url": "s_branch_harmonic.html#eg_alpha_cuts",
  "type": "Example",
  "number": "1.11.4",
  "title": "<span class=\"process-math\">\\(\\Log_\\alpha(z)\\)<\/span> is holomorphic.",
  "body": " is holomorphic   Show that the branch is holomorphic on its domain and satisfies     As in , we use the Cauchy-Riemann equations. Fix . Picking a small enough neighborhood in the -plane, we can assume that for close enough to we have if and only if and for some fixed . for some , and hence and for some .   "
},
{
  "id": "th_branches",
  "level": "2",
  "url": "s_branch_harmonic.html#th_branches",
  "type": "Theorem",
  "number": "1.11.5",
  "title": "Branches.",
  "body": " Branches   Let be open and connected.   Argument  If and are two branches of on , then there is a such that for all .    Logarithm     If and are two branches of on , then there is a such that for all .    Any branch of on is differentiable and satisfies for all .       Power functions  Fix , and let .   If and are two branches of on , then there is a such that for all .    Any branch of on is differentiable and satisfies for all .             "
},
{
  "id": "eg_branch_cube",
  "level": "2",
  "url": "s_branch_harmonic.html#eg_branch_cube",
  "type": "Example",
  "number": "1.11.6",
  "title": "Branches of cube-root function.",
  "body": " Branches of cube-root function   Let .   Show that there are exactly three branches of on $U$ and give explicit formulas for each.    Verify that holds for one of your three branches.          "
},
{
  "id": "d_harmonic",
  "level": "2",
  "url": "s_branch_harmonic.html#d_harmonic",
  "type": "Definition",
  "number": "1.11.7",
  "title": "Harmonic functions.",
  "body": " Harmonic functions   Let be an open set. A function is harmonic if it satisfies the Laplace's equation  for all .  A pair of harmonic conjugates on is a pair of harmonic functions on satisfying .   "
},
{
  "id": "th_harmonic_conjugates",
  "level": "2",
  "url": "s_branch_harmonic.html#th_harmonic_conjugates",
  "type": "Theorem",
  "number": "1.11.8",
  "title": "Harmonic conjugates.",
  "body": " Harmonic conjugates   Assume is an open subset of (identified as usual with ). Assume and are real-valued functions on whose second-order partial derivatives exist on . The following statements are equivalent.    and are harmonic and     is holomorphic on .          "
},
{
  "id": "s_complex_paths",
  "level": "1",
  "url": "s_complex_paths.html",
  "type": "Section",
  "number": "1.12",
  "title": "Complex paths",
  "body": " Complex paths   Complex path   A complex path is a continuous function where is a real interval.  We say that a path  parametrizes its image .     Paths  Note that since can be thought of as a subset of , a path can be treated as a complex function with a particularly restricted domain . As such, the same conventions around complex functions apply to paths. In particular, we may write in terms of its real and imaginary parts. Furthermore, identifying with , we can also think of a complex path as a continuous function .    Parametrized curves   For the given curve find a path that parametrizes .   Fix and . Let .    Fix and . Let be the directed line segment that begins at and ends at .            Path jargon   Let be a path.   The points and are called the initial and terminal points of , respectively.     is closed if .     is simple if for all .    The path defined as is called the reverse of .    Given a path satisfying , the concatentation of and , denoted , is the path defined as and .       We now define a notion of real differentiability of paths. Note that though we can indeed think of a path as a complex function, since no element in its domain is an interior point of , considered as a subset of , the notion of complex differentiability does not apply to .   Path derivative   Given a path with and element , we say is (real) differentiable at if and are differentiable at , and define . Geometrically we interpret as a tangent vector to at the point . The path is smooth on if exists and is continuous at all ; it is piecewise smooth if we can write as a concatenation of finitely many smooth curves.     Tangent vectors   Compute for your parametrizations in and provide a sketch illustrating the relationship of to .        Of course, identifying with the planar path (or curve) , we recognize its derivative as the derivative of this planar path (or curve). As a result, all the usual properties of derivatives of planar paths carry over to our complex setting. We will not list them here, but will make a connection with complex differentiation.   Complex and path differentiation   Let be holomorphic, and suppose is a smooth path.   The path is smooth on and satisfies for all .    In particular, if contains the real interval , then the path defined as is smooth and satisfies .            Integration of complex-valued functions   Let be a complex-valued function, and write . We say is Riemann integrable on if the Riemann integrals exist, in which case we write .     Fundamental theorem of calculus   Let be continuous.   The function is differentiable on and satisfies for all .    If satisfies for all , then .            Complex-valued function integration   Let . Compute using two different techniques: directly, using , and indirectly using .        "
},
{
  "id": "d_complex_path",
  "level": "2",
  "url": "s_complex_paths.html#d_complex_path",
  "type": "Definition",
  "number": "1.12.1",
  "title": "Complex path.",
  "body": " Complex path   A complex path is a continuous function where is a real interval.  We say that a path  parametrizes its image .   "
},
{
  "id": "s_complex_paths-3",
  "level": "2",
  "url": "s_complex_paths.html#s_complex_paths-3",
  "type": "Remark",
  "number": "1.12.2",
  "title": "Paths.",
  "body": " Paths  Note that since can be thought of as a subset of , a path can be treated as a complex function with a particularly restricted domain . As such, the same conventions around complex functions apply to paths. In particular, we may write in terms of its real and imaginary parts. Furthermore, identifying with , we can also think of a complex path as a continuous function .  "
},
{
  "id": "eg_parametrized_circle",
  "level": "2",
  "url": "s_complex_paths.html#eg_parametrized_circle",
  "type": "Example",
  "number": "1.12.3",
  "title": "Parametrized curves.",
  "body": " Parametrized curves   For the given curve find a path that parametrizes .   Fix and . Let .    Fix and . Let be the directed line segment that begins at and ends at .          "
},
{
  "id": "d_path_properties",
  "level": "2",
  "url": "s_complex_paths.html#d_path_properties",
  "type": "Definition",
  "number": "1.12.4",
  "title": "Path jargon.",
  "body": " Path jargon   Let be a path.   The points and are called the initial and terminal points of , respectively.     is closed if .     is simple if for all .    The path defined as is called the reverse of .    Given a path satisfying , the concatentation of and , denoted , is the path defined as and .      "
},
{
  "id": "d_path_derivative",
  "level": "2",
  "url": "s_complex_paths.html#d_path_derivative",
  "type": "Definition",
  "number": "1.12.5",
  "title": "Path derivative.",
  "body": " Path derivative   Given a path with and element , we say is (real) differentiable at if and are differentiable at , and define . Geometrically we interpret as a tangent vector to at the point . The path is smooth on if exists and is continuous at all ; it is piecewise smooth if we can write as a concatenation of finitely many smooth curves.   "
},
{
  "id": "eg_derivative",
  "level": "2",
  "url": "s_complex_paths.html#eg_derivative",
  "type": "Example",
  "number": "1.12.6",
  "title": "Tangent vectors.",
  "body": " Tangent vectors   Compute for your parametrizations in and provide a sketch illustrating the relationship of to .       "
},
{
  "id": "th_real_complex_diff",
  "level": "2",
  "url": "s_complex_paths.html#th_real_complex_diff",
  "type": "Theorem",
  "number": "1.12.7",
  "title": "Complex and path differentiation.",
  "body": " Complex and path differentiation   Let be holomorphic, and suppose is a smooth path.   The path is smooth on and satisfies for all .    In particular, if contains the real interval , then the path defined as is smooth and satisfies .          "
},
{
  "id": "d_path_integration",
  "level": "2",
  "url": "s_complex_paths.html#d_path_integration",
  "type": "Definition",
  "number": "1.12.8",
  "title": "Integration of complex-valued functions.",
  "body": " Integration of complex-valued functions   Let be a complex-valued function, and write . We say is Riemann integrable on if the Riemann integrals exist, in which case we write .   "
},
{
  "id": "th_FTC",
  "level": "2",
  "url": "s_complex_paths.html#th_FTC",
  "type": "Theorem",
  "number": "1.12.9",
  "title": "Fundamental theorem of calculus.",
  "body": " Fundamental theorem of calculus   Let be continuous.   The function is differentiable on and satisfies for all .    If satisfies for all , then .          "
},
{
  "id": "eg_path_integral",
  "level": "2",
  "url": "s_complex_paths.html#eg_path_integral",
  "type": "Example",
  "number": "1.12.10",
  "title": "Complex-valued function integration.",
  "body": " Complex-valued function integration   Let . Compute using two different techniques: directly, using , and indirectly using .       "
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
