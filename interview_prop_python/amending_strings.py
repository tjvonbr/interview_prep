def amend_the_sentence(s):
    s_list = list(s)
    print(s_list)

    for i in range(len(s_list)):
        k = i - 1

        if s_list[i].isupper():
            s_list[i].lower()
            s_list.insert(k, "")
        else:
            continue
            

    print(s_list)






amend_the_sentence("codesignalIsAwesome")
