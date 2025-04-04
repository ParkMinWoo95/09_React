package com.kh.start.exception;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
	
	private ResponseEntity<Map<String, String>> makeResponseEntity(RuntimeException e, HttpStatus status){
		Map<String, String> error = new HashMap();
		error.put("error-message", e.getMessage());
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
	}
	
	@ExceptionHandler(InvalidUserRequestException.class)
	public ResponseEntity<?> handleInvalidUserError(InvalidUserRequestException e){
		/*
		Map<String, String> error = new HashMap();
		error.put("error-message", e.getMessage());
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
		*/
		return makeResponseEntity(e, HttpStatus.UNAUTHORIZED);
	}
	
	@ExceptionHandler(MemberIdDuplicateException.class)
	public ResponseEntity<?> handleDuplicateMemberId(MemberIdDuplicateException e){
		return makeResponseEntity(e, HttpStatus.BAD_REQUEST);
		/*
		Map<String, String> error = new HashMap<>();
		error.put("error-message", e.getMessage());
		return ResponseEntity.badRequest().body(e.getMessage());
		*/
	}
	@ExceptionHandler(CustomAuthenticationException.class)
	public ResponseEntity<?> handleAuthenticationError(CustomAuthenticationException e){
		Map<String, String> error = new HashMap();
		error.put("error-message", e.getMessage());
		return ResponseEntity.badRequest().body(error);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleArgumentsNotValid(MethodArgumentNotValidException e){
		
		Map<String, String> errors = new HashMap();
		
		List list = e.getBindingResult().getFieldErrors();
		/*
		for(int i = 0; i< list.size(); i++) {
			log.info("예외가 발생한 필드명 : {}, 이유 : {}", ((FieldError)list.get(i)).getField(), 
													   ((FieldError)list.get(i)).getDefaultMessage());
		}
		*/
		
		e.getBindingResult()
		 .getFieldErrors()
		 .forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
		
		return ResponseEntity.badRequest().body(errors);
	}
}
