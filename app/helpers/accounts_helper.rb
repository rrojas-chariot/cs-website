module AccountsHelper

  MENU_OPTIONS_ACCOUNT = { :account_details      => {:value => "account details",     :link => "/account/details"},
                       :payments             => {:value => "payment info",        :link => "/account/payments"},
                       :school_work_info     => {:value => "school & work info",  :link => "/account/school"},
                       :edit_public_profile  => {:value => "edit public profile", :link => "/account/public_profile"},
                       :change_password      => {:value => "change password",     :link => "/account/password"}}
                       
  MENU_OPTIONS_MY = { :my_challenges        => {:value => "my challenges",       :link => "/account/challenges"} }                       

  MENU_OPTIONS_REVIEW = { :outstanding_reviews  => {:value => "outstanding reviews", :link => "/account/outstanding_reviews"} }
  
  MENU_OPTIONS_QUICKQUIZ = { :submit_question => {:value => "submit a question",       :link => "/quiz_questions/new"},
                          :review_questions  => {:value => "review questions", :link => "/quiz_questions"}}

  def build_menu(position,selected_item)
    content = ""
    eval("MENU_OPTIONS_#{position.upcase}").each do |item,options|
      content  += "<li>"
      if item.to_s == selected_item
        content += "<a href='#{options[:link]}' class='active'>#{options[:value]}</a>"
      else
        content += "<a href='#{options[:link]}' class=''>#{options[:value]}</a>"
      end
      content += "</li>"
    end
    return content.html_safe
  end

  def work_options
    [["Please select ...",nil],["Contractor","Contractor"],["Employed","Employed"],["Unemployed","Unemployed"],["Prefer Not To Answer","Prefer Not To Answer"]]
  end

  def shirt_size_options
    [["Please select ...",nil],["M-small","M-small"],["M-medium","M-medium"],["M-large","M-large"],["M-x-large","M-x-large"],["W-small","W-small"],["W-medium","W-medium"],["W-large","W-large"],["W-x-large","W-x-large"]]
  end

  def age_range_options
    [["Please select ...",nil],["14-20","14-20"],["21-30","21-30"],["31-40","31-40"],["41-60","41-60"],["60+","60+"],["Prefer not answer","Prefer not answer"]]
  end

  def gender_options
    [["Please select ...",nil],["Male","Male"],["Female","Female"]]
  end
  
  def preferred_payment_options
    [["Please select ...",nil],["Check","Check"],["Paypal","Paypal"],["Wire","Wire"]]
  end

end
