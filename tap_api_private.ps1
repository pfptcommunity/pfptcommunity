  # powershell sample
  
  $principal  = "•••••••••"
  $secret     = "•••••••••"
  $uri        = "https://tap-api-v2.proofpoint.com"
	$command    = "/v2/people/vap"
  $parameters = "?window=90"
      
  $auth       = $principal + ':' + $secret
  $Encoded    = [System.Text.Encoding]::UTF8.GetBytes($auth)
  $authb64    = [System.Convert]::ToBase64String($Encoded)
 
  $params     = @{"Authorization"="Basic $($authb64)"}
  
  Invoke-RestMethod -Uri $uri$command$parameters -Method Get -Headers $params -ContentType 'application/json' | ConvertTo-Json 
