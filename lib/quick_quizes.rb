require 'cloud_spokes'

class QuickQuizes < Cloudspokes
  
  def self.fetch_10_questions
    get('http://cs-quick-quiz-admin.herokuapp.com/random.json')
  end
  
  def self.save_answer(access_token, username, params)
        
    options = {
      :body => {
          :username => username,
          :answer__c => params[:answer],
          :is_correct__c => params[:correct],
          :time__c => params[:time],
          :quick_quiz_question__c => params[:question_id]
      }
    }
    
    post(ENV['SFDC_REST_API_URL']+'/quickquiz', options)
  end
  
  def self.find_answer_by_id(access_token, id)
    get(ENV['SFDC_REST_API_URL']+"/quickquiz?questionId=#{id}")
  end

end


   